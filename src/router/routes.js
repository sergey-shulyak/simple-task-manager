import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../containers/layout';
import Home from '../components/homePage/Home';
import BoardListPage from '../containers/boardListPage';
import BoardPage from '../containers/boardPage';

export default () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/boards" component={BoardListPage} />
      <Route path="/boards/:id" component={BoardPage} />
    </Switch>
  </Layout>
);
