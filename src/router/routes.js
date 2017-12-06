import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../containers/layout';
import App from '../components/App';
import BoardListPage from '../containers/boardListPage';

export default () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/boards" component={BoardListPage} />
    </Switch>
  </Layout>
);
