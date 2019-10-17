// primary location for redux side of application
import materializeCSS from 'materialize-css/dist/css/materialize.min.css'; // webpack will inclide this in our bundle now
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import App from './components/App';

import logger from 'redux-logger'

// root store object which takes in
// 1. list of reducers -> functions that update the store,
//  2. initial state,
//  3. middlewares (applied inside applyMiddleware call)
const store = createStore(reducers, {}, applyMiddleware(reduxThunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
