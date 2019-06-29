import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { Provider } from 'react-redux';

import './index.css';

import Form from './containers/FormContainer';
import Home from './containers/Home';

import store from './state';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/item/:id" component={Form} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

/* eslint-disable no-undef */
// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
