

import Navbar from './Navbar.js';
import Page from './Page.js';
import Footer from './Footer'

import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";


const Active = ({user}) =>  {
  return (
    <Router class="bg-green-500 flex flex-grow">
      <Navbar class="h-10 bg-red-500"/>
      {/* <div class="flex flex-col space-y-4 " className ="curr"> */}
        <Page class="bg-green-500 flex-grow" user = {user}/>
      {/* </div> */}
      <Footer class="h-10 bg-blue-500" user = {user} />
    </Router> 
  );
}


export default Active;
