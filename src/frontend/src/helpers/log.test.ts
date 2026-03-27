import { afterAll, vi } from 'vitest';

import { NAME, VERSION } from '../env';

const PREFIX = `[${NAME}@${VERSION}]`;
const METHODS = ['error', 'info', 'warn'] as const;

const spies = METHODS.reduce(
  (accumulator, method) => {
    accumulator[method] = vi
      .spyOn(console, method)
      .mockImplementation(() => {});
    return accumulator;
  },
  {} as Record<(typeof METHODS)[number], ReturnType<typeof vi.spyOn>>,
);

afterAll(() => {
  Object.entries(spies).forEach(([, spy]) => spy.mockRestore());
});

it.each(METHODS)('calls console.%s with prefix and message', async (method) => {
  const { log } = await import('./log');
  const message = 'message';
  expect(log[method](message)).toBe(undefined);
  expect(spies[method]).toHaveBeenCalledTimes(1);
  expect(spies[method]).toHaveBeenCalledWith(PREFIX, message);
});
