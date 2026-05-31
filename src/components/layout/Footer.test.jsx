import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithLanguage } from '../../test/utils.jsx';
import Footer from './Footer.jsx';

describe('Footer', () => {
  it('shows the current year', () => {
    renderWithLanguage(<Footer />);
    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()}`))).toBeInTheDocument();
  });

  it('renders GitHub as a hardened external link', () => {
    renderWithLanguage(<Footer />);
    const gh = screen.getByRole('link', { name: 'GitHub' });
    expect(gh).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
