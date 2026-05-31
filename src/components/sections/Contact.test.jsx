import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithLanguage } from '../../test/utils.jsx';
import Contact from './Contact.jsx';
import { CONTACT } from '../../data/contact.js';

describe('Contact', () => {
  it('exposes the email as a mailto link', () => {
    renderWithLanguage(<Contact />);
    const mail = screen.getByRole('link', { name: new RegExp(CONTACT.email, 'i') });
    expect(mail).toHaveAttribute('href', `mailto:${CONTACT.email}`);
  });

  it('links to LinkedIn as a hardened external link', () => {
    renderWithLanguage(<Contact />);
    const linkedin = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedin).toHaveAttribute('href', CONTACT.linkedin);
    expect(linkedin).toHaveAttribute('rel', 'noopener noreferrer');
  });

  // Privacy regression guard — ties to the security audit: the phone must stay out.
  it('never renders a phone number', () => {
    const { container } = renderWithLanguage(<Contact />);
    expect(container.querySelector('a[href^="tel:"]')).toBeNull();
    expect(container.textContent).not.toContain('640');
  });

  it('shows the location', () => {
    renderWithLanguage(<Contact />);
    expect(screen.getByText(/Alicante/)).toBeInTheDocument();
  });
});
