import { view } from '@forge/bridge';
import { render, screen, waitFor } from '@testing-library/react';

import type { FullContext } from '../types';
import App from './App';

vi.mock('../edit', () => ({ default: () => <>edit</> }));
vi.mock('../view', () => ({ default: () => <>view</> }));

const mockedView = vi.mocked(view);

it('renders loading icon', () => {
  render(<App />);
  expect(screen.getByLabelText('Loading')).toBeInTheDocument();
});

it.each(['edit', 'view'])('renders %s', async (entryPoint) => {
  mockedView.getContext.mockResolvedValueOnce({
    extension: { entryPoint },
  } as unknown as FullContext);
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText(entryPoint)).toBeInTheDocument();
  });
});
