import { Parser } from 'expr-eval';

import { log } from '../helpers';
import { transform } from './helpers';

vi.mock('../helpers', () => ({
  log: { error: vi.fn() },
}));

describe('transform', () => {
  it('catches error', () => {
    const error = new Error();
    const spy = vi.spyOn(Parser, 'evaluate').mockImplementation(() => {
      throw error;
    });

    expect(
      transform(
        {
          decimal: [''],
          formula: [''],
          function: [{ label: 'test', value: 'test' }],
          jql: [''],
          label: [''],
          prefix: [''],
          suffix: [''],
          variable: [''],
        },
        [],
      ),
    ).toEqual([{ label: '', value: '' }]);

    expect(log.error).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });
});
