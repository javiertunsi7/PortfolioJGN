/**
 * Declarative icon registry. Each entry maps a name to its SVG inner markup and,
 * optionally, `solid` (filled rather than stroked). The <Icon /> component reads
 * from here, so adding an icon never means touching rendering logic.
 *
 * Stroked icons inherit `currentColor`; viewBox is 24×24 unless overridden.
 */
export const ICON_PATHS = {
  code: {
    paths: (
      <>
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </>
    ),
  },
  server: {
    paths: (
      <>
        <rect x="3" y="4" width="18" height="7" rx="1.5" />
        <rect x="3" y="13" width="18" height="7" rx="1.5" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </>
    ),
  },
  tools: {
    paths: <path d="M14.7 6.3a4 4 0 0 0-5.6 5.2L3 17.6V21h3.4l6.1-6.1a4 4 0 0 0 5.2-5.6l-2.5 2.5-2.1-2.1Z" />,
  },
  github: {
    solid: true,
    paths: (
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.52.1.71-.23.71-.5v-1.96c-2.9.63-3.52-1.23-3.52-1.23-.48-1.2-1.16-1.52-1.16-1.52-.95-.65.07-.64.07-.64 1.05.07 1.6 1.08 1.6 1.08.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.66-1.4-2.32-.26-4.76-1.16-4.76-5.16 0-1.14.4-2.07 1.07-2.8-.1-.27-.46-1.32.1-2.74 0 0 .88-.28 2.88 1.07a9.9 9.9 0 0 1 5.24 0c2-1.35 2.87-1.07 2.87-1.07.57 1.42.21 2.47.1 2.74.67.73 1.07 1.66 1.07 2.8 0 4.01-2.44 4.9-4.77 5.15.38.33.71.97.71 1.96v2.9c0 .28.19.61.72.5A10.5 10.5 0 0 0 12 1.5Z" />
    ),
  },
  linkedin: {
    solid: true,
    paths: (
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8 18H5.5v-8H8v8ZM6.75 8.7a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9ZM18.5 18H16v-4.3c0-1.1-.4-1.7-1.3-1.7-.95 0-1.45.64-1.45 1.7V18H10.8v-8h2.45v1.1c.35-.65 1.2-1.35 2.5-1.35 1.85 0 2.75 1.1 2.75 3.35V18Z" />
    ),
  },
  mail: {
    paths: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  phone: {
    paths: <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  },
  pin: {
    paths: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  check: {
    paths: <path d="M20 6 9 17l-5-5" />,
  },
  arrow: {
    paths: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
  },
  spark: {
    paths: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />,
  },
  layers: {
    paths: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 13 9 5 9-5" />
      </>
    ),
  },
  car: {
    paths: (
      <>
        <path d="M5 14l1.5-4.5A2 2 0 0 1 8.4 8h7.2a2 2 0 0 1 1.9 1.5L19 14" />
        <path d="M4 14h16v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z" />
        <path d="M7 16.5h.01M17 16.5h.01" />
      </>
    ),
  },
  bolt: {
    paths: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  },
  globe: {
    paths: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
      </>
    ),
  },
  compass: {
    paths: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
      </>
    ),
  },
  grid: {
    paths: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
  },
  shield: {
    paths: (
      <>
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  beat: {
    paths: <path d="M3 12h4l2-6 4 12 2-6h6" />,
  },
  cloud: {
    paths: <path d="M7 18a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6 1.4A3.5 3.5 0 0 1 17 18H7Z" />,
  },
  book: {
    paths: (
      <>
        <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" />
        <path d="M19 17H6a2 2 0 0 0-2 2" />
      </>
    ),
  },
  film: {
    paths: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" />
      </>
    ),
  },
  utensils: {
    paths: <path d="M5 3v7a2 2 0 0 0 4 0V3M7 11v10M17 3c-1.5 0-2.5 1.8-2.5 4s1 4 2.5 4v10" />,
  },
};
