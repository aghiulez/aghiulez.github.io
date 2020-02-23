// import React from 'react';
// import './styles.css';

// const Navbar = () => {

//   return (
//     <div class="topnav">
//       <a class="active" href="/">Home</a>
//       <a href="/AboutMe">About Me</a>
//       <a href="/Projects">Projects</a>
//       <a href="/Contact">Contact</a>
//     </div>    

//   );

// };

// export default Navbar;


import './styles.css';

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          
          <div class = "topnav">
            
            <Link class="AraMatthew" to="/">AraMatthew</Link>
          

            <Link class="links" to="/contact">Contact</Link> 
            <Link class="links" to="/experience">Experience</Link>              
            <Link class="links" to="/projects">Projects</Link>
            <Link class="links" to="/about">About</Link>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. 
            -----
             <Route exact path="/animals" component={Animals} />
            */}
        <Switch>          
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
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

function Home() {
  return <h2>Home</h2>;
  //return Component = {home};
}

function Contact() {
  return <h2>Contact</h2>;
  //return Component = {home};
}


function About() {
  return <h2>About</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

function Experience() {
  return <h2>Experience</h2>;
}

