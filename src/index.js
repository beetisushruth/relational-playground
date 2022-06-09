// @flow
import './wydr';

import {ReduxRouter} from '@lagunovsky/redux-react-router'
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import './index.css';
import store, {history} from './store';
import App from './App';

let sentryConfig = {};
sentryConfig.dsn = 'https://496d372d00a24c57af7967ac2ff5dacd@sentry.io/2445886';
sentryConfig.environment = process.env.NODE_ENV;
if (process.env.REACT_APP_GIT_SHA) {
  sentryConfig.release =
    'relational-playground@' + process.env.REACT_APP_GIT_SHA;
}
Sentry.init(sentryConfig);

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter history={history}>
      <div>
        <App />
      </div>
    </ReduxRouter>
  </Provider>,
  ((document.getElementById('root'): any): HTMLElement)
);
