import React from "react";
import * as path from "./constants/path";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from "./components/HomePage";
import Details from "./components/Details";

const App = () => (
  <Router>
    <Switch>
      <Route path={path.ROOT} component={HomePage} exact />
      <Route path={path.DETAILS} component={Details} />
    </Switch>
  </Router>
);

export default App;
