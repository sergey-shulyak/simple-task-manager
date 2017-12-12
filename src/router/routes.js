import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../containers/layout';
import App from '../components/App';
import BoardListPage from '../containers/boardListPage';
import BoardPage from '../containers/boardPage';

export default () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/boards" component={BoardListPage} />
      <Route path="/boards/:id" component={BoardPage} />
    </Switch>
  </Layout>
);
