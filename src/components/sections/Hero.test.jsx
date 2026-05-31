import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithLanguage } from '../../test/utils.jsx';
import Hero from './Hero.jsx';

describe('Hero', () => {
  it('shows the name and role', () => {
    renderWithLanguage(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Javier Galvañ');
    expect(screen.getByText(/Desarrollador FullStack/)).toBeInTheDocument();
  });

  it('renders the portrait with descriptive alt text and the right source', () => {
    renderWithLanguage(<Hero />);
    const img = screen.getByRole('img', { name: /Javier Galvañ Navarro/ });
    expect(img).toHaveAttribute('src', '/profile.jpg');
  });

  it('links to GitHub as a hardened external link', () => {
    renderWithLanguage(<Hero />);
    const gh = screen.getByRole('link', { name: /GitHub/i });
    expect(gh).toHaveAttribute('href', 'https://github.com/javiertunsi7');
    expect(gh).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the headline stats', () => {
    renderWithLanguage(<Hero />);
    expect(screen.getByText('850h')).toBeInTheDocument();
    expect(screen.getByText('260+')).toBeInTheDocument();
  });

  it('renders English copy when the locale is English', () => {
    renderWithLanguage(<Hero />, { lang: 'en' });
    expect(screen.getByText(/FullStack Developer/)).toBeInTheDocument();
  });
});
