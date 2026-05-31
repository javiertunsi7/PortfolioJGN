import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithLanguage } from '../../test/utils.jsx';
import Nav from './Nav.jsx';

describe('Nav', () => {
  it('renders the section anchors', () => {
    renderWithLanguage(<Nav />);
    expect(screen.getByRole('link', { name: 'Proyectos' })).toHaveAttribute('href', '#projects');
  });

  it('marks the active language with aria-pressed', () => {
    renderWithLanguage(<Nav />, { lang: 'es' });
    expect(screen.getByRole('button', { name: 'ES' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'EN' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('switches language when the other button is clicked', async () => {
    const user = userEvent.setup();
    renderWithLanguage(<Nav />, { lang: 'es' });
    await user.click(screen.getByRole('button', { name: 'EN' }));
    expect(screen.getByRole('button', { name: 'EN' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
  });

  it('switches back to Spanish', async () => {
    const user = userEvent.setup();
    renderWithLanguage(<Nav />, { lang: 'en' });
    await user.click(screen.getByRole('button', { name: 'ES' }));
    expect(screen.getByRole('button', { name: 'ES' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('link', { name: 'Proyectos' })).toBeInTheDocument();
  });
});
