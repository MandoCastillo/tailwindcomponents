import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

export const Content = () => {
  return (
    <Switch>
      <Route children={Page1} exact path="/page1" />
      <Route children={Page2} exact path="/page2" />
    </Switch>
  );
};
