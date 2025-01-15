import React from 'react';
import { MemoryRouter } from 'react-router';
import { Reducer, UnknownAction, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSagaMiddleware, { Saga } from 'redux-saga';

import { reducer as rootReducer, RootState } from '../state';

interface C {
  children: React.ReactNode;
}

export const provideRouter = ({
  routes = ['/'],
}: {
  routes?: string[];
} = {}) => {
  return {
    Provider: ({ children }: C) => {
      return <MemoryRouter initialEntries={routes}>{children}</MemoryRouter>;
    },
  };
};

export function provideGenericStore<T>({
  reducer,
  initState,
  rootSaga,
}: {
  reducer: Reducer<T, UnknownAction>;
  initState?: T;
  rootSaga?: Saga;
}) {
  const sagaMW = rootSaga && createSagaMiddleware();
  const store = configureStore({
    reducer,
    middleware: (getDefault) => {
      const mw = getDefault({ thunk: false });
      if (sagaMW) mw.concat(sagaMW);
      return mw;
    },
    preloadedState: initState,
  });
  if (rootSaga && sagaMW) sagaMW.run(rootSaga);

  return {
    Provider: ({ children }: C) => {
      return <Provider store={store}>{children}</Provider>;
    },
    store,
  };
}

export const provideStore = ({
  initState,
  rootSaga,
}: {
  initState?: RootState;
  rootSaga?: Saga;
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
  initState?: RootState;
  rootSaga?: Saga;
} = {}) => {
  const { Provider, store } = provideStore({ initState, rootSaga });
  const { Provider: Router } = provideRouter({ routes });
  return {
    Provider: ({ children }: C) => {
      return (
        <Provider>
          <Router>{children}</Router>
        </Provider>
      );
    },
    store,
  };
};

export default defaultProvider;
