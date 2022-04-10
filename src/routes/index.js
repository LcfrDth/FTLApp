import React from 'react';

// React Router
import { Route, Switch, withRouter } from "react-router-dom";

// Pages
import Landing from '../pages/Landing';

const routes = () => {
  return (
    <Switch>
        <Route path="/" exact component={Landing} />
    </Switch>
  )
}

export default withRouter(routes);
