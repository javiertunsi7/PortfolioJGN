/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

/**
 * Content-Security-Policy, applied to the built HTML only.
 *
 * It is intentionally NOT injected during `vite dev`: the dev server and React
 * Fast Refresh inject an inline bootstrap script that a strict `script-src 'self'`
 * would block. The production bundle emits only external, hashed module scripts,
 * so 'self' is enough there.
 *
 * `style-src 'self'` (no 'unsafe-inline'): React applies `style={{}}` via the
 * CSSOM (`element.style`), which CSP does not govern, and the build emits no
 * <style> tags or style="" attributes — so inline styles keep working.
 *
 * `frame-ancestors` and other framing protections only take effect as real HTTP
 * headers — see README + `_headers` / `vercel.json` for the host-level config.
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

/** Injects the CSP <meta> into index.html at build time. */
function cspMetaPlugin() {
  return {
    name: 'inject-csp-meta',
    apply: 'build',
    transformIndexHtml(html) {
      const meta = `<meta http-equiv="Content-Security-Policy" content="${CONTENT_SECURITY_POLICY}" />`;
      return html.replace('</title>', `</title>\n    ${meta}`);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cspMetaPlugin()],
  // For a GitHub Pages *project* site (user.github.io/<repo>/) set this to '/<repo>/'.
  // For a custom domain, Vercel, Netlify or local preview, leave it as '/'.
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
});
