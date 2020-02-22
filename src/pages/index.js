import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import aboutMe from '../components/aboutMe';

  const pages = ({user}) => {
      return (
          <Router>
              <Switch>
                  <Route exact path ="/">
                      <aboutMe user = {user} />
                  </Route>
              </Switch>
          </Router>
      )
  }

  export default pages;