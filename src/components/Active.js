

import Navbar from './Navbar.js';
import Page from './Page.js';

import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";


const Active = ({user}) =>  {
  return (
    <Router>
      <Navbar />
      <div className ="curr">
        <Page user = {user}/>
      </div>
    </Router> 
  );
}


export default Active;
