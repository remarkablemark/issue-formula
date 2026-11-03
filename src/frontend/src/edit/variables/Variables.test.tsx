import { render, screen } from '@testing-library/react';
import type { Mock } from 'vitest';

import { clickButton } from '../../../test/helpers';
import Variables from './Variables';

const INPUT_COUNT_PER_ROW = 2;
let consoleErrorSpy: Mock;

beforeAll(() => {
  // suppress React deprecated Context API error
  consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(vi.fn());
});

afterAll(() => {
  consoleErrorSpy.mockRestore();
});

beforeEach(() => {
  render(<Variables />);
  expect(screen.queryAllByRole('textbox')).toHaveLength(0);
});

it('renders heading', () => {
  expect(
    screen.getByRole('heading', { level: 3, name: 'Variables' }),
  ).toBeVisible();
});

it('renders button', () => {
  expect(screen.getByRole('button', { name: 'Add variable' })).toBeVisible();
});

it('adds variable', () => {
  clickButton('Add variable');
  expect(screen.getAllByRole('textbox')).toHaveLength(INPUT_COUNT_PER_ROW);
  ['Variable', 'Function', 'JQL'].forEach((label) => {
    expect(screen.getByLabelText(label)).toBeVisible();
  });
  expect(screen.getByDisplayValue('COUNT')).toBeInTheDocument();
});

it('adds variable', () => {
  let rows = 0;
  for (; rows < 2; rows++) {
    clickButton('Add variable');
  }
  expect(screen.getAllByRole('textbox')).toHaveLength(
    INPUT_COUNT_PER_ROW * rows,
  );
});

it('deletes variable', () => {
  // add
  clickButton('Add variable');
  expect(screen.getAllByRole('textbox')).toHaveLength(INPUT_COUNT_PER_ROW);

  // delete
  clickButton('Delete variable');
  expect(screen.queryAllByRole('textbox')).toHaveLength(0);
});
