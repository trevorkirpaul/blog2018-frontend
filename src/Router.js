import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Blogs from './containers/Blogs';
import Header from './containers/Header';

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Blogs} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default Router;
