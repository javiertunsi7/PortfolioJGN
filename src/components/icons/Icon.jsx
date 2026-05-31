import { ICON_PATHS } from './iconPaths.jsx';

/**
 * Renders a named icon from the registry. Returns null for unknown names so a
 * typo degrades to nothing rather than crashing.
 *
 * Icons are decorative (`aria-hidden`): every place that uses one also shows a
 * text label, so there is nothing for a screen reader to miss.
 *
 * @param {{ name: string, size?: number | string, style?: object, className?: string }} props
 */
export default function Icon({ name, size, style, className, ...rest }) {
  const icon = ICON_PATHS[name];
  if (!icon) return null;

  const { solid = false, viewBox = '0 0 24 24', strokeWidth = 1.8, paths } = icon;
  const sizing = size != null ? { width: size, height: size, ...style } : style;

  return (
    <svg
      viewBox={viewBox}
      className={className}
      style={sizing}
      fill={solid ? 'currentColor' : 'none'}
      stroke={solid ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths}
    </svg>
  );
}
