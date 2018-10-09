import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { store } from './store';
import Router from './routes';
import './index.css';
// import Home from './components/home/HomeContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ReduxProvider store={store}>
    <CookiesProvider>
      <Router />
    </CookiesProvider>
  </ReduxProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
