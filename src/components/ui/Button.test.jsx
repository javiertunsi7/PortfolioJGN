import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button.jsx';

describe('Button', () => {
  it('renders an anchor with the primary variant by default', () => {
    render(<Button href="#contact">Contactar</Button>);
    const link = screen.getByRole('link', { name: 'Contactar' });
    expect(link).toHaveAttribute('href', '#contact');
    expect(link).toHaveClass('btn', 'btn-primary');
  });

  it('applies the ghost variant and the small size', () => {
    render(
      <Button href="#x" variant="ghost" size="sm">
        Ghost
      </Button>,
    );
    expect(screen.getByRole('link')).toHaveClass('btn', 'btn-ghost', 'btn-sm');
  });

  it('hardens external links against tabnabbing', () => {
    render(
      <Button href="https://example.com" external>
        External
      </Button>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not set target/rel on internal links', () => {
    render(<Button href="#contact">Internal</Button>);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });
});
