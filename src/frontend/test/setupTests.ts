// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { act, renderHook } from '@testing-library/react';

import { useFormValuesStore } from '../src/store';
import type { FormValues } from '../src/types';

// Polyfill for window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

vi.mock('@forge/bridge', () => ({
  requestJira: vi.fn().mockResolvedValue({ json: vi.fn() }),
  view: {
    getContext: vi.fn().mockResolvedValue(undefined),
    submit: vi.fn(),
  },
}));

vi.mock('../src/env');

afterEach(() => {
  vi.clearAllMocks();

  // reset store
  const {
    result: { current: store },
  } = renderHook(() => useFormValuesStore());
  act(() => {
    store.setFormValues({} as FormValues);
  });
});
