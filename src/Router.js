import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Blogs from './containers/Blogs'

const Router = () => (
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Blogs} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);

export default Router;