

import Navbar from './Navbar.js';
import Page from './Page.js';
import Footer from './Footer'

import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";


const Active = ({user}) =>  {
  return (
    <div class="min-h-screen flex flex-col">
    <Router>
      <Navbar />
      {/* <div class="flex flex-col space-y-4 " className ="curr"> */}
        <Page user = {user}/>
      {/* </div> */}
      <Footer  user = {user} />
    </Router> 
    </div>
  );
}


export default Active;
