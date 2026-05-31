import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithLanguage } from '../../test/utils.jsx';
import TechStack from './TechStack.jsx';

describe('TechStack', () => {
  it('renders the three categories with their chips', () => {
    renderWithLanguage(<TechStack />);
    expect(screen.getByRole('heading', { name: 'Frontend' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Backend' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Herramientas' })).toBeInTheDocument();
    expect(screen.getByText('Spring Boot')).toBeInTheDocument();
  });
});
