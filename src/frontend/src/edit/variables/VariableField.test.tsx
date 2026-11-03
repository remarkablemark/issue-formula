import { render, screen } from '@testing-library/react';

import { changeLabelValue } from '../../../test/helpers';
import VariableField from './VariableField';

const props = {
  index: 0,
  label: 'label',
  name: 'name',
};

it('renders textarea', () => {
  render(<VariableField {...props} />);
  expect(screen.getByRole('textbox', { name: props.label })).toBeVisible();
});

describe('error', () => {
  it.each([undefined, null, ''])('does not render error for %s', (value) => {
    render(<VariableField {...props} />);
    // https://github.com/testing-library/react-testing-library/issues/924#issuecomment-856745092
    changeLabelValue(props.label, 'a');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    changeLabelValue(props.label, value!);
    expect(screen.queryByText(/Variable/)).not.toBeInTheDocument();
  });

  it('validates variable starts with a letter', () => {
    render(<VariableField {...props} />);
    changeLabelValue(props.label, '0');
    expect(screen.getByText('Variable must start with a letter')).toBeVisible();
  });

  it('validates variable does not contain whitespace', () => {
    render(<VariableField {...props} />);
    changeLabelValue(props.label, 'a ');
    expect(
      screen.getByText('Variable must not contain whitespace'),
    ).toBeVisible();
  });

  it('validates variable does not contain special characters', () => {
    render(<VariableField {...props} />);
    changeLabelValue(props.label, 'a$');
    expect(
      screen.getByText('Variable must not contain special characters'),
    ).toBeVisible();
  });
});
