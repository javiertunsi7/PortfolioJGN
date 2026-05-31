const SIZE_CLASS = { sm: 'btn-sm' };

/**
 * Call-to-action rendered as an anchor (every CTA in this site navigates).
 *
 * When `external` is set it adds `target="_blank"` and `rel="noopener noreferrer"`,
 * which prevents the opened page from accessing `window.opener`
 * (reverse-tabnabbing) and from receiving the referrer.
 *
 * @param {{
 *   href: string,
 *   variant?: 'primary' | 'ghost',
 *   size?: 'sm',
 *   external?: boolean,
 *   className?: string,
 *   children: import('react').ReactNode,
 * }} props
 */
export default function Button({
  href,
  variant = 'primary',
  size,
  external = false,
  className = '',
  children,
  ...rest
}) {
  const classes = ['btn', `btn-${variant}`, size && SIZE_CLASS[size], className]
    .filter(Boolean)
    .join(' ');
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a href={href} className={classes} {...externalProps} {...rest}>
      {children}
    </a>
  );
}
