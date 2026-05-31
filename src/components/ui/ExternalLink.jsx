/**
 * Anchor to a third-party URL with hardened defaults.
 *
 * `rel="noopener noreferrer"` blocks reverse-tabnabbing (the target can't reach
 * `window.opener`) and stops the referrer from leaking. Centralizing it here
 * means no external link in the app can forget it.
 *
 * @param {{ href: string, className?: string, children: import('react').ReactNode }} props
 */
export default function ExternalLink({ href, className, children, ...rest }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
