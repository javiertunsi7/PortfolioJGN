import { describe, it, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useDisclosure } from './useDisclosure.js';

describe('useDisclosure', () => {
  it('starts closed and toggles open/closed', () => {
    const { result } = renderHook(() => useDisclosure());
    expect(result.current.isOpen).toBe(false);
    act(() => result.current.toggle());
    expect(result.current.isOpen).toBe(true);
    act(() => result.current.toggle());
    expect(result.current.isOpen).toBe(false);
  });

  it('closes when Escape is pressed', () => {
    const { result } = renderHook(() => useDisclosure());
    act(() => result.current.toggle());
    expect(result.current.isOpen).toBe(true);
    act(() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })));
    expect(result.current.isOpen).toBe(false);
  });

  it('exposes an explicit close()', () => {
    const { result } = renderHook(() => useDisclosure());
    act(() => result.current.toggle());
    act(() => result.current.close());
    expect(result.current.isOpen).toBe(false);
  });
});
