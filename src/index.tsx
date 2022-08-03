import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

/* eslint-disable no-undef */
// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
