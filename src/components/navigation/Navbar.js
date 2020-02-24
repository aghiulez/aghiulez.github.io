
import Home from '../Home/home.js'
import About from '../About/about.js'
import './styles.css';

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


const navbar = ({user}) =>  {

  return (
    <Router>
      <div>
        <nav>
          
          <div className = "topnav">
            
            <Link className="AraMatthew" to="/">AraMatthew</Link>
          

            <Link className="links" to="/contact">Contact</Link> 
            <Link className="links" to="/experience">Experience</Link>              
            <Link className="links" to="/projects">Projects</Link>
            <Link className="links" to="/about">About</Link>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. 
            -----
             <Route exact path="/animals" component={Animals} />
            */}
 
 
        <Switch>          
          <Route path="/contact">
            <Home />
          </Route>
            
          
          <Route path="/about">
            <About className = "container" user = {user} />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}



// make their own components later on.....






function Projects() {
  console.log("a project");
  return <h2>Projects</h2>;
}

function Experience() {
  console.log("@ experience")
  return <h2>Experience</h2>;
}



export default navbar;
