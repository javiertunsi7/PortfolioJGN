/// <reference types="vitest/config" />
import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

/**
 * Content-Security-Policy injected into the *built* HTML only — never during
 * `vite dev`, where the dev server and React Fast Refresh inject an inline
 * bootstrap script that a strict `script-src 'self'` would block.
 *
 * `style-src 'self'` (no 'unsafe-inline'): React applies `style={{}}` via the
 * CSSOM, which CSP does not govern, and the build emits no <style>/style="".
 *
 * `frame-ancestors` and the rest only take effect as real HTTP headers — see
 * `public/_headers` (Netlify) and `vercel.json` (Vercel).
 */
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  'upgrade-insecure-requests',
].join('; ');

/**
 * Absolute site origin for Open Graph / canonical URLs (OG requires absolute).
 * Priority: explicit VITE_SITE_URL → Netlify/Vercel deploy URL → placeholder.
 * Set VITE_SITE_URL to your domain (see .env.example) for correct share previews.
 */
function resolveSiteUrl(env) {
  const origin =
    env.VITE_SITE_URL ||
    process.env.URL || // Netlify
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '') ||
    'https://example.com';
  return origin.replace(/\/+$/, '');
}

/** Replaces the `__SITE_URL__` token in index.html and injects the CSP on build. */
function htmlPlugin(siteUrl) {
  return {
    name: 'html-meta',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        let out = html.replaceAll('__SITE_URL__', siteUrl);
        if (!ctx.server) {
          const meta = `<meta http-equiv="Content-Security-Policy" content="${CONTENT_SECURITY_POLICY}" />`;
          out = out.replace('</title>', `</title>\n    ${meta}`);
        }
        return out;
      },
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const siteUrl = resolveSiteUrl(env);

  return {
    plugins: [react(), htmlPlugin(siteUrl)],
    // For a GitHub Pages *project* site set this to '/<repo>/'. '/' otherwise.
    base: '/',
    build: {
      outDir: 'dist',
      // Do not ship source maps publicly: keeps the original source out of prod.
      sourcemap: false,
    },
    // Vitest — unit/component tests run in a jsdom DOM with Testing Library.
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/test/setup.js',
      restoreMocks: true,
      css: false,
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
        include: ['src/**/*.{js,jsx}'],
        exclude: ['src/main.jsx', 'src/test/**', '**/*.test.{js,jsx}'],
      },
    },
  };
});
