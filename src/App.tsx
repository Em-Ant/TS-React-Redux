import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { Provider } from 'react-redux';

import Form from './containers/Form';
import Home from './containers/Home';
import Playground from './containers/Playground';
import Paper from './components/PaperMatch';

import store from './state';

import { GlobalStyle } from './global-style';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/item/:id" component={Form} />
          <Route path="/playground">
            <Playground />
            <Route path="/playground/test">
              <Paper>
                <Switch>
                  <Route path="/playground/test/a">Content A</Route>
                  <Route path="/playground/test/b">Content B</Route>
                  <Redirect to="/playground" />
                </Switch>
              </Paper>
            </Route>
          </Route>
          <Redirect to="/home" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
