import { render, screen } from '@testing-library/react';
import type { Mock } from 'vitest';

import { changeLabelValue } from '../../../test/helpers';
import VariableRow from './VariableRow';

let consoleErrorSpy: Mock;

beforeAll(() => {
  // suppress React deprecated Context API error
  consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(vi.fn());
});

afterAll(() => {
  consoleErrorSpy.mockRestore();
});

const props = {
  index: 0,
  showLabel: true,
};

it('renders labels', () => {
  render(<VariableRow {...props} />);
  ['Variable', 'Function', 'JQL'].forEach((label) => {
    expect(screen.getByLabelText(label)).toBeVisible();
  });
});

it('renders button', () => {
  render(<VariableRow {...props} />);
  expect(screen.getByRole('button', { name: 'Delete variable' })).toBeVisible();
});

it('selects option', () => {
  render(<VariableRow {...props} />);
  const value = 'test';
  changeLabelValue('Function', value);
  expect(screen.getByDisplayValue(value)).toBeVisible();
});
