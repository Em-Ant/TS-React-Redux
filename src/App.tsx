import React, { lazy, Suspense } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { Provider } from 'react-redux';

const Form = lazy(() =>
  import(/* webpackChunkName: "form" */ './containers/Form')
);
const Home = lazy(() =>
  import(/* webpackChunkName: "home" */ './containers/Home')
);
const Playground = lazy(() =>
  import(/* webpackChunkName: "playground" */ './containers/Playground')
);

import Paper from './components/PaperMatch';

import store from './state';

import { GlobalStyle } from './global-style';

const Fallback = () => <div>loading...</div>;
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Suspense fallback={<Fallback />}>
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
      </Suspense>
    </Provider>
  );
}

export default App;
