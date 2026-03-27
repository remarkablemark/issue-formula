import('@atlaskit/css-reset');

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';

const container = document.getElementById('root') as HTMLDivElement;
export const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
