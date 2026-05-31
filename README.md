# Portfolio — Javier Galvañ Navarro

Portfolio personal y carta de presentación profesional como **Desarrollador FullStack**
(Java · Spring Boot · React). Bilingüe (ES / EN), responsive, accesible y construido con
foco en código limpio, principios SOLID y seguridad.

> Sitio estático de una sola página. No tiene backend ni base de datos, no procesa datos
> de usuarios y no contiene credenciales ni secretos: la superficie de ataque es mínima.

---

## 🧱 Stack

| Capa            | Tecnología                                  |
| --------------- | ------------------------------------------- |
| Framework       | React 19                                    |
| Build / dev     | Vite 8                                       |
| Lenguaje        | JavaScript (JSX), módulos ES                |
| Estilos         | CSS moderno con custom properties (tokens)  |
| Tipografías     | Inter + JetBrains Mono (auto-alojadas)      |
| Calidad         | ESLint 9 (flat config) + Prettier           |

---

## 🚀 Puesta en marcha

Requisitos: **Node ≥ 20.19** (ver `.nvmrc`, usa la 24) y npm.

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # sirve /dist localmente para verificar el build
npm run lint     # análisis estático con ESLint
npm run format   # formatea el código con Prettier
```

---

## 🏛️ Arquitectura

Separación estricta de responsabilidades (SRP) — los datos, los textos, la lógica y la
presentación viven en carpetas distintas, de modo que cada cosa se cambia en un único sitio:

```
src/
├── main.jsx                  # Punto de entrada: fuentes + estilos + montaje de React
├── App.jsx                   # Composition root (solo ensambla, sin lógica de negocio)
├── data/                     # Contenido estructurado
│   ├── projects.js           #   · proyectos
│   └── contact.js            #   · datos de contacto (sin teléfono, ver Seguridad)
├── i18n/                     # Internacionalización
│   ├── es.js / en.js         #   · tablas de traducción
│   ├── index.js              #   · registro de idiomas + idioma por defecto
│   └── pick.js               #   · resuelve campos localizados ({ es, en })
├── context/                  # Inyección de dependencias vía Context (sin prop-drilling)
│   ├── LanguageContext.js    #   · contexto + hook useLanguage()
│   └── LanguageProvider.jsx  #   · proveedor + persistencia del idioma
├── hooks/                    # Lógica reutilizable y testeable
│   ├── useReveal.js          #   · animación de aparición al hacer scroll
│   └── usePersistentState.js #   · estado respaldado en localStorage (a prueba de fallos)
├── components/
│   ├── icons/                # Registro declarativo de iconos + componente <Icon />
│   ├── ui/                   # Primitivas reutilizables (Button, ExternalLink)
│   ├── layout/               # Background, Nav, Footer, SkipLink
│   ├── projects/             # ProjectCard, ProjectMock
│   └── sections/             # Hero, TechStack, Projects, About, Contact
└── styles/                   # CSS dividido por capas (orden definido en index.css)
```

**Principios aplicados:**

- **SRP / SOLID** — cada componente y hook tiene una única responsabilidad. La lógica
  (i18n, persistencia, reveal) está fuera de los componentes de presentación.
- **DRY** — primitivas como `Button` y `ExternalLink` evitan repetir markup y centralizan
  decisiones (p. ej. la seguridad de los enlaces externos en un solo lugar).
- **Open/Closed** — los iconos (`iconPaths.jsx`) y los mockups de proyecto (`MOTIFS`) son
  mapas declarativos: añadir uno nuevo no obliga a tocar la lógica de renderizado.
- **Inversión de dependencias** — los componentes consumen `useLanguage()` en lugar de
  recibir traducciones por props encadenadas.

---

## 🔒 Seguridad

Medidas tomadas para que el proyecto sea seguro, también al publicarlo en GitHub:

- **Sin secretos en el repositorio.** No hay claves de API ni `.env`; `.gitignore` ya
  bloquea cualquier archivo `.env*` por si en el futuro se añadiera alguno.
- **Sin datos personales sensibles.** El teléfono **no** se publica (solo email + LinkedIn),
  para no exponer un número personal a bots/scrapers. Para añadirlo, ver `src/data/contact.js`.
- **Enlaces externos endurecidos.** Todos usan `rel="noopener noreferrer"` (centralizado en
  `Button`/`ExternalLink`), lo que evita el _reverse-tabnabbing_ y la fuga del _referrer_.
- **Content-Security-Policy** inyectada en el HTML de producción (`vite.config.js`), que
  restringe scripts, estilos, imágenes y conexiones al propio origen.
- **Sin scripts de terceros ni CDNs.** React y las fuentes se empaquetan en el build; ningún
  recurso externo se carga en tiempo de ejecución (mejor privacidad y sin SRI que mantener).
- **Tipografías auto-alojadas** (`@fontsource`): los visitantes no contactan con servidores
  de Google, evitando la fuga de IPs (relevante para RGPD).
- **Sin source maps en producción** (`build.sourcemap: false`): no se expone el código fuente.
- **Sin `dangerouslySetInnerHTML`, `eval` ni HTML dinámico**: no hay vectores de XSS; el acceso
  a `localStorage` está envuelto y validado.

### Cabeceras de seguridad (al desplegar)

La CSP viaja en el HTML, pero estas cabeceras solo tienen efecto como cabeceras HTTP reales.
Este repo ya incluye **`public/_headers`** (Netlify / Cloudflare Pages) y **`vercel.json`** (Vercel)
con todas ellas listas. GitHub Pages no permite cabeceras personalizadas (ahí solo aplica la CSP del `<meta>`).

```
Content-Security-Policy: default-src 'self'; base-uri 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
X-Frame-Options: DENY
```

---

## 🌐 Despliegue

El proyecto es estático: sirve la carpeta `dist/` tras `npm run build`.

- **Vercel / Netlify** — importa el repo. Build: `npm run build`, output: `dist`. No requiere
  configuración de rutas. Añade las cabeceras de seguridad (Netlify: `_headers`;
  Vercel: `vercel.json`).
- **GitHub Pages (proyecto `usuario.github.io/<repo>`)** — pon `base: '/<repo>/'` en
  `vite.config.js`, ejecuta `npm run build` y publica `dist/` (o usa GitHub Actions).
- **Dominio propio / cualquier hosting estático** — sube el contenido de `dist/` tal cual.

---

## ♿ Accesibilidad y rendimiento

- Enlace _“saltar al contenido”_, landmarks semánticos (`nav`, `main`, `footer`) y estados
  `aria-pressed` en el selector de idioma.
- Respeta `prefers-reduced-motion`: desactiva animaciones para quien lo prefiera.
- Iconos decorativos marcados como `aria-hidden`.
- Sin dependencias en tiempo de ejecución más allá de React: bundle reducido.

---

## ✍️ Personalizar el contenido

- **Textos**: `src/i18n/es.js` y `src/i18n/en.js`.
- **Proyectos**: `src/data/projects.js`.
- **Contacto**: `src/data/contact.js`.
- **Foto del hero**: reemplaza `public/profile.jpg` por tu retrato (recomendado ~600×630 px, JPG/WebP optimizado).
- **Colores y espaciado**: `src/styles/tokens.css`.

---

## 📄 Licencia

[MIT](./LICENSE) © 2026 Javier Galvañ Navarro
