import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExternalLink from './ExternalLink.jsx';

describe('ExternalLink', () => {
  it('always opens in a new tab with a hardened rel', () => {
    render(<ExternalLink href="https://github.com/javiertunsi7">GitHub</ExternalLink>);
    const link = screen.getByRole('link', { name: 'GitHub' });
    expect(link).toHaveAttribute('href', 'https://github.com/javiertunsi7');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
