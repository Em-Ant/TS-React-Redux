import React, { lazy, Suspense } from 'react';

import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
  Outlet,
} from 'react-router';

import { Provider } from 'react-redux';

const Form = lazy(
  () => import(/* webpackChunkName: "form" */ './containers/Form'),
);
const Home = lazy(
  () => import(/* webpackChunkName: "home" */ './containers/Home'),
);
const Playground = lazy(
  () => import(/* webpackChunkName: "playground" */ './containers/Playground'),
);

const ComponentsTest = lazy(
  () =>
    import(
      /* webpackChunkName: "components-test" */ './containers/ComponentsTest'
    ),
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
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/item/:id" element={<Form />} />
            <Route path="/playground" element={<Playground />}>
              <Route
                path="test"
                element={
                  <Paper>
                    <Outlet />
                  </Paper>
                }
              >
                <Route index element={<Navigate to="/playground" replace />} />
                <Route
                  path="*"
                  element={<Navigate to="/playground" replace />}
                />
                <Route path="a" element={<>Content A</>} />
                <Route path="b" element={<>Content B</>} />
              </Route>
            </Route>
            <Route path="/components-test" element={<ComponentsTest />} />
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
