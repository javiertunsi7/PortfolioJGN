import { describe, it, expect, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { usePersistentState } from './usePersistentState.js';

describe('usePersistentState', () => {
  it('uses the default value when nothing is stored', () => {
    const { result } = renderHook(() => usePersistentState('k', 'es'));
    expect(result.current[0]).toBe('es');
  });

  it('reads an existing, valid stored value', () => {
    window.localStorage.setItem('k', 'en');
    const { result } = renderHook(() => usePersistentState('k', 'es'));
    expect(result.current[0]).toBe('en');
  });

  it('discards a stored value that fails validation', () => {
    window.localStorage.setItem('k', 'fr');
    const { result } = renderHook(() =>
      usePersistentState('k', 'es', (v) => ['es', 'en'].includes(v)),
    );
    expect(result.current[0]).toBe('es');
  });

  it('persists updates back to localStorage', () => {
    const { result } = renderHook(() => usePersistentState('k', 'es'));
    act(() => result.current[1]('en'));
    expect(result.current[0]).toBe('en');
    expect(window.localStorage.getItem('k')).toBe('en');
  });

  it('does not throw when storage is unavailable', () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('storage blocked');
    });
    expect(() => renderHook(() => usePersistentState('k', 'es'))).not.toThrow();
    spy.mockRestore();
  });
});
