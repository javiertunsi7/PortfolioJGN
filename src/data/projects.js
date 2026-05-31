/**
 * Portfolio projects.
 *
 * Fields shared across languages stay as plain values; fields that differ per
 * language are objects keyed by code (`{ es, en }`) and resolved with `pick()`.
 * `feature: true` marks the single hero project rendered across the full row.
 */
export const PROJECTS = [
  {
    id: 'lumen',
    feature: true,
    icon: 'film',
    motif: 'cinema',
    type: { es: 'Full-Stack · Proyecto final', en: 'Full-Stack · Capstone' },
    name: 'Lumen Cinema',
    desc: {
      es: 'Plataforma completa de gestión de cine: reserva de butacas en tiempo real, pagos y panel de administración con métricas.',
      en: 'Complete cinema management platform: real-time seat booking, payments and an admin dashboard with metrics.',
    },
    highlights: {
      es: [
        'Autenticación JWT con roles (Spring Security)',
        'Pagos con Stripe + tickets PDF con QR',
        'Butacas en tiempo real y dashboard con KPIs',
        '+260 tests automatizados',
      ],
      en: [
        'JWT auth with roles (Spring Security)',
        'Stripe payments + PDF tickets with QR',
        'Real-time seats and KPI dashboard',
        '260+ automated tests',
      ],
    },
    tags: ['React 19', 'Vite', 'Spring Boot 4', 'MySQL / JPA', 'Stripe', 'Recharts', 'Cloudinary'],
    links: [
      { l: 'Frontend', url: 'https://github.com/javiertunsi7/FrontCine' },
      { l: 'Backend', url: 'https://github.com/javiertunsi7/BackendCine' },
    ],
  },
  {
    id: 'fitcontrol',
    icon: 'beat',
    motif: 'fitness',
    type: { es: 'Full-Stack · En equipo', en: 'Full-Stack · Team' },
    name: 'FitControl',
    desc: {
      es: 'Aplicación de seguimiento y control de entrenamientos, desarrollada en equipo con metodología Scrum.',
      en: 'Workout tracking and control application, built as a team using Scrum methodology.',
    },
    highlights: {
      es: [
        'Arquitectura full-stack con API REST',
        'Trabajo en equipo · Git flow',
        'Frontend y backend desacoplados',
      ],
      en: [
        'Full-stack architecture with REST API',
        'Team work · Git flow',
        'Decoupled frontend and backend',
      ],
    },
    tags: ['Java', 'Spring Boot', 'React', 'MySQL', 'Scrum'],
    links: [
      { l: 'Frontend', url: 'https://github.com/Grupo-2-FitControl/FitControl-Frontend' },
      { l: 'Backend', url: 'https://github.com/Grupo-2-FitControl/FitControl-Backend' },
    ],
  },
  {
    id: 'aulaverde',
    icon: 'layers',
    motif: 'green',
    type: { es: 'Full-Stack · Hackathon Capgemini', en: 'Full-Stack · Capgemini Hackathon' },
    name: 'AulaVerde',
    desc: {
      es: 'Proyecto de hackathon (Capgemini E5) centrado en educación y sostenibilidad. Construido contrarreloj en equipo.',
      en: 'Hackathon project (Capgemini E5) focused on education and sustainability. Built against the clock as a team.',
    },
    highlights: {
      es: [
        'Desarrollado en formato hackathon',
        'Stack full-stack Java + React',
        'Colaboración intensa en equipo',
      ],
      en: ['Built in hackathon format', 'Java + React full-stack', 'Intense team collaboration'],
    },
    tags: ['Java', 'Spring Boot', 'React', 'REST API'],
    links: [
      { l: 'Frontend', url: 'https://github.com/HackatonCapGemini-E5-2026/AulaVerde_FrontEnd' },
      { l: 'Backend', url: 'https://github.com/HackatonCapGemini-E5-2026/AulaVerde_BackEnd' },
    ],
  },
  {
    id: 'king',
    icon: 'book',
    motif: 'books',
    type: { es: 'Frontend', en: 'Frontend' },
    name: { es: 'Catálogo Stephen King', en: 'Stephen King Catalog' },
    desc: {
      es: 'Catálogo de libros que consume la API de Stephen King, con componentes reutilizables y manejo de errores.',
      en: 'Book catalog consuming the Stephen King API, with reusable components and error handling.',
    },
    highlights: {
      es: [
        'Consumo de API REST (Stephen King)',
        'Carrusel, cards y tabla interactiva',
        'useState / useEffect + fallback data',
      ],
      en: [
        'REST API consumption (Stephen King)',
        'Carousel, cards and interactive table',
        'useState / useEffect + fallback data',
      ],
    },
    tags: ['React', 'JavaScript', 'REST API', 'CSS'],
    links: [{ l: 'GitHub', url: 'https://github.com/javiertunsi7' }],
  },
  {
    id: 'tiempo',
    icon: 'cloud',
    motif: 'weather',
    type: { es: 'Frontend', en: 'Frontend' },
    name: { es: 'El Tiempo', en: 'Weather App' },
    desc: {
      es: 'App meteorológica responsive con geolocalización, búsqueda e historial persistente. Estética glassmorphism.',
      en: 'Responsive weather app with geolocation, search and persistent history. Glassmorphism aesthetic.',
    },
    highlights: {
      es: [
        'API Open-Meteo: datos reales + geolocalización',
        'Historial con LocalStorage',
        'UI glassmorphism · mobile-first',
      ],
      en: [
        'Open-Meteo API: real data + geolocation',
        'History with LocalStorage',
        'Glassmorphism UI · mobile-first',
      ],
    },
    tags: ['JavaScript', 'Tailwind', 'Open-Meteo', 'LocalStorage'],
    links: [{ l: 'GitHub', url: 'https://github.com/javiertunsi7/elTiempo' }],
  },
  {
    id: 'fogones',
    icon: 'utensils',
    motif: 'food',
    type: { es: 'Frontend', en: 'Frontend' },
    name: 'Los Tres Fogones',
    desc: {
      es: 'Sitio web multi-página para venta de productos selectos, con carga dinámica de catálogos y Custom Elements.',
      en: 'Multi-page website for selling premium products, with dynamic catalog loading and Custom Elements.',
    },
    highlights: {
      es: [
        'Catálogos dinámicos desde JSON (async)',
        'Custom Elements para header/footer',
        'Carrusel de opiniones · responsive',
      ],
      en: [
        'Dynamic catalogs from JSON (async)',
        'Custom Elements for header/footer',
        'Reviews carousel · responsive',
      ],
    },
    tags: ['JavaScript', 'Custom Elements', 'HTML / CSS'],
    links: [{ l: 'GitHub', url: 'https://github.com/javiertunsi7/LosTresFogonesSelectos' }],
  },
  {
    id: 'ingles',
    icon: 'globe',
    motif: 'lang',
    type: { es: 'Personal · En solitario', en: 'Personal · Solo' },
    name: { es: 'Inglés Project', en: 'English Project' },
    desc: {
      es: 'Proyecto personal trabajado por mi cuenta, antes y durante el bootcamp. Iniciativa propia de aprendizaje.',
      en: 'Personal project worked on independently, before and during the bootcamp. Self-driven learning initiative.',
    },
    highlights: {
      es: ['Iniciativa y aprendizaje autodidacta', 'Desarrollo continuo por cuenta propia'],
      en: ['Self-driven initiative and learning', 'Ongoing independent development'],
    },
    tags: ['JavaScript', 'HTML / CSS'],
    links: [{ l: 'GitHub', url: 'https://github.com/javiertunsi7/InglesProyect' }],
  },
];
