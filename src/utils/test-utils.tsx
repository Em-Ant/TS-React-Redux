import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, History } from 'history';
import {
  createStore,
  applyMiddleware,
  Reducer,
  AnyAction,
  PreloadedState,
} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware, { Saga } from 'redux-saga';

import { reducer as rootReducer, RootState } from '../state';

type C = {
  children: React.ReactNode;
};
type H = History<History.PoorMansUnknown>;

export const provideRouter = ({
  history,
  routes = ['/'],
}: {
  history?: H;
  routes?: string[];
} = {}) => {
  return {
    Provider: function RouterProvider({ children }: C) {
      return (
        <Router
          history={
            history ??
            createMemoryHistory({
              initialEntries: routes,
            })
          }
        >
          {children}
        </Router>
      );
    },
    history,
  };
};

export function provideGenericStore<T>({
  reducer,
  initState,
  rootSaga,
}: {
  reducer: Reducer<T, AnyAction>;
  initState?: PreloadedState<T>;
  rootSaga?: Saga<any>;
}) {
  const sagaMW = rootSaga && createSagaMiddleware();
  const enhancer = sagaMW && applyMiddleware(sagaMW);
  const store = createStore(reducer, initState, enhancer);
  rootSaga && sagaMW?.run(rootSaga);

  return {
    Provider: function StoreProvider({ children }: C) {
      return <Provider store={store}>{children}</Provider>;
    },
    store,
  };
}

export const provideStore = ({
  initState,
  rootSaga,
}: {
  initState?: PreloadedState<RootState>;
  rootSaga?: Saga<any>;
}) =>
  provideGenericStore({
    reducer: rootReducer,
    initState,
    rootSaga,
  });

const defaultProvider = ({
  routes = ['/'],
  initState,
  rootSaga,
}: {
  routes?: string[];
  initState?: PreloadedState<RootState>;
  rootSaga?: Saga<any>;
} = {}) => {
  const { Provider, store } = provideStore({ initState, rootSaga });
  const { Provider: Router, history } = provideRouter({ routes });
  return {
    Provider: function DefaultProvider({ children }: C) {
      return (
        <Provider>
          <Router>{children}</Router>
        </Provider>
      );
    },
    store,
    history,
  };
};

export default defaultProvider;
