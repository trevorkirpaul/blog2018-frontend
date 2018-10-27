import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Blogs from './containers/Blogs';
import Header from './containers/Header';
import CreatePost from './containers/CreatePost';

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Blogs} />
        <Route path="/create-post" exact component={CreatePost} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default Router;
