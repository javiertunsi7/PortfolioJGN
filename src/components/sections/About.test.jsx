import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithLanguage } from '../../test/utils.jsx';
import About from './About.jsx';

describe('About', () => {
  it('renders the heading and the key facts', () => {
    renderWithLanguage(<About />);
    expect(screen.getByText(/Organizado, metódico/)).toBeInTheDocument();
    expect(screen.getByText('Vehículo propio')).toBeInTheDocument();
    expect(screen.getByText('Adaptabilidad')).toBeInTheDocument();
  });
});
