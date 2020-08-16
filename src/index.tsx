import React from 'react';
import ReactDOM from 'react-dom';
import { enableES5 } from 'immer';
import 'core-js';

enableES5();

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

/* eslint-disable no-undef */
// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
