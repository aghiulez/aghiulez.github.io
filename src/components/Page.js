import Projects from './Pages/Projects.js';
import Home from './Pages/home.js';
import About from './Pages/about.js';
import Contact from './Pages/Contact.js';
import Experience from './Pages/Experience.js';



import React from "react";
import {
  // HashRouter as Router1,
  Switch,
  Route
} from "react-router-dom";



const Page = ({user}) =>  {


    return (
        <Switch >          
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About className = "container" user = {user} />
        </Route>
        <Route path="/projects">
          <Projects user = {user}/>
        </Route>
        <Route path="/experience">
          <Experience user = {user}/>
        </Route>
        <Route path="/">
          <Home user = {user}/>
        </Route>
      </Switch>
    )
}

export default Page;