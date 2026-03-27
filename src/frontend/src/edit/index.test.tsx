import { render, screen } from '@testing-library/react';

import { useGadgetConfiguration } from '../hooks';
import Edit from '.';

vi.mock('../hooks', () => ({ useGadgetConfiguration: vi.fn() }));

vi.mock('./Edit', () => ({ default: () => <>Edit</> }));

const mockedUseGadgetConfiguration = vi.mocked(useGadgetConfiguration);

it('renders loading icon', () => {
  mockedUseGadgetConfiguration.mockReturnValue({ isLoading: true });
  render(<Edit />);
  expect(screen.getByLabelText('Loading')).toBeInTheDocument();
});

it('renders edit', () => {
  mockedUseGadgetConfiguration.mockReturnValue({ isLoading: false });
  render(<Edit />);
  expect(screen.getByText('Edit')).toBeInTheDocument();
});
