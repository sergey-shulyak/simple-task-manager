import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from '../store';
import routes from './routes';

export default () => (
  <ConnectedRouter history={history}>
    <Route>
      {routes}
    </Route>
  </ConnectedRouter>
);
