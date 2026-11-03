import { decode } from './decode';
import { log } from './log';

vi.mock('./log', () => ({
  log: { error: vi.fn() },
}));

it.each([
  ['&gt;', '>'],
  ['&gt;&gt;', '>>'],
  ['&lt;', '<'],
  ['&lt;&lt;', '<<'],
  ['&lt;&gt;', '<>'],
  ['&gt;&lt;', '><'],
  ['&lt;code&gt;', '<code>'],
])('decodes %j', (input, output) => {
  expect(decode(input)).toBe(output);
});

// eslint-disable-next-line @typescript-eslint/no-empty-function
it.each([undefined, null, {}, [], true, false, 0, 1, () => {}, new Date()])(
  'does not decode invalid %s',
  (input) => {
    expect(decode(input as string)).toBe(input);
    expect(log.error).toHaveBeenCalledExactlyOnceWith(
      // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
      `Invalid string: ${input}`,
    );
  },
);
