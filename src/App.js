import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'redux-logic-layer';
import Router from './router/Router';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <Router />
    </Provider>
  );
};

export default App;
