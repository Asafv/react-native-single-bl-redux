import React from 'react';
import { StatusBar } from 'react-native';
import {
  Provider,
  createStoreHook,
  createDispatchHook,
  createSelectorHook,
} from 'react-redux';
import { createStore } from 'redux';
import { store } from 'redux-logic-layer';
import Router from './router/Router';

const AppContext = React.createContext(null);
export const useAppStore = createStoreHook(AppContext);
export const useAppDispatch = createDispatchHook(AppContext);
export const useAppSelector = createSelectorHook(AppContext);

const tempRducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'type1':
      return {
        ...state,
        count: state.count + 1,
      };
    default: return state;
  }
};

const appStore = createStore(tempRducer);

// const appStore = createStore(rootReducer);
//<Provider context={AppContext} store={appStore}></Provider>
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Provider context={AppContext} store={appStore}>
        <StatusBar barStyle="dark-content" />
        <Router />
      </Provider>
    </Provider>
  );
};

export default App;
