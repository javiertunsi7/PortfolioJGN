import { describe, it, expect } from 'vitest';
import { screen, within } from '@testing-library/react';
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

  it('keeps the mobile menu closed by default', () => {
    renderWithLanguage(<Nav />);
    expect(screen.getByRole('button', { name: 'Abrir menú' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(document.getElementById('mobile-nav')).toBeNull();
  });

  it('opens the mobile menu with the section links and the CTA', async () => {
    const user = userEvent.setup();
    renderWithLanguage(<Nav />);
    await user.click(screen.getByRole('button', { name: 'Abrir menú' }));

    const menu = document.getElementById('mobile-nav');
    expect(menu).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(within(menu).getByRole('link', { name: 'Proyectos' })).toHaveAttribute(
      'href',
      '#projects',
    );
    expect(within(menu).getByRole('link', { name: 'Contactar' })).toHaveAttribute(
      'href',
      '#contact',
    );
  });

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup();
    renderWithLanguage(<Nav />);
    await user.click(screen.getByRole('button', { name: 'Abrir menú' }));
    await user.click(within(document.getElementById('mobile-nav')).getByRole('link', { name: 'Sobre mí' }));
    expect(document.getElementById('mobile-nav')).toBeNull();
  });

  it('closes the mobile menu on Escape', async () => {
    const user = userEvent.setup();
    renderWithLanguage(<Nav />);
    await user.click(screen.getByRole('button', { name: 'Abrir menú' }));
    await user.keyboard('{Escape}');
    expect(document.getElementById('mobile-nav')).toBeNull();
  });

  it('closes the mobile menu when clicking outside', async () => {
    const user = userEvent.setup();
    renderWithLanguage(<Nav />);
    await user.click(screen.getByRole('button', { name: 'Abrir menú' }));
    await user.click(document.body);
    expect(document.getElementById('mobile-nav')).toBeNull();
  });
});
