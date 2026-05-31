import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Self-hosted fonts: no third-party request to Google, so visitor IPs are never
// shared with a CDN (privacy-friendly, EU/GDPR-conscious) and the site works offline.
// Only the Latin subsets are imported — they cover all ES/EN content (including
// "Galvañ" and accents) without shipping Cyrillic/Greek/Vietnamese glyphs.
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';
import '@fontsource/inter/latin-800.css';
import '@fontsource/inter/latin-900.css';
import '@fontsource/inter/latin-ext-400.css';
import '@fontsource/inter/latin-ext-500.css';
import '@fontsource/inter/latin-ext-600.css';
import '@fontsource/inter/latin-ext-700.css';
import '@fontsource/inter/latin-ext-800.css';
import '@fontsource/inter/latin-ext-900.css';
import '@fontsource/jetbrains-mono/latin-400.css';
import '@fontsource/jetbrains-mono/latin-500.css';
import '@fontsource/jetbrains-mono/latin-600.css';
import '@fontsource/jetbrains-mono/latin-ext-400.css';
import '@fontsource/jetbrains-mono/latin-ext-500.css';
import '@fontsource/jetbrains-mono/latin-ext-600.css';

import './styles/index.css';
import App from './App.jsx';

const container = document.getElementById('root');
if (!container) {
  throw new Error('No se encontró el elemento raíz #root en index.html');
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
