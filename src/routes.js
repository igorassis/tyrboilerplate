import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';

import Home from './components/home/HomeContainer';

export default () => (
  <Router>
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect from="/" to="home" />
    </Switch>
  </Router>
)