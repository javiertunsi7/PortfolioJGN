import { describe, it, expect } from 'vitest';
import { screen, within } from '@testing-library/react';
import { renderWithLanguage } from '../../test/utils.jsx';
import Projects from './Projects.jsx';
import { PROJECTS } from '../../data/projects.js';

describe('Projects', () => {
  it('renders one card per project', () => {
    const { container } = renderWithLanguage(<Projects />);
    expect(container.querySelectorAll('article.proj')).toHaveLength(PROJECTS.length);
  });

  it('marks the featured project and lists its highlights', () => {
    const { container } = renderWithLanguage(<Projects />);
    const featured = container.querySelector('article.proj.feature');
    expect(featured).toBeInTheDocument();
    expect(within(featured).getAllByRole('listitem').length).toBeGreaterThan(0);
    expect(screen.getByText(/Proyecto destacado/)).toBeInTheDocument();
  });

  it('renders every repo link as a hardened external link', () => {
    const { container } = renderWithLanguage(<Projects />);
    const links = container.querySelectorAll('.proj-links a');
    expect(links.length).toBeGreaterThan(0);
    links.forEach((anchor) => {
      expect(anchor).toHaveAttribute('target', '_blank');
      expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
