import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Icon from './Icon.jsx';

describe('Icon', () => {
  it('renders an aria-hidden svg for a known icon', () => {
    const { container } = render(<Icon name="github" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).toHaveAttribute('focusable', 'false');
  });

  it('renders nothing for an unknown icon name', () => {
    const { container } = render(<Icon name="this-icon-does-not-exist" />);
    expect(container.querySelector('svg')).toBeNull();
  });

  it('applies an explicit size to width and height', () => {
    const { container } = render(<Icon name="mail" size={18} />);
    expect(container.querySelector('svg')).toHaveStyle({ width: '18px', height: '18px' });
  });
});
