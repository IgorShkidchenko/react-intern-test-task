import React from 'react'
import * as path from './constants/path'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { HomePage } from './components/Root'
import { Details } from './components/DetailsPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={path.ROOT} component={HomePage} exact />
        <Route path={path.DETAILS} component={Details} />
      </Switch>
   </Router>
  );
}

export default App
