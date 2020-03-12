import Projects from './Projects.js';
import Home from './home.js';
import About from './about.js';
import Contact from './Contact.js';
import Experience from './Experience.js';



import React from "react";
import {
  BrowserRouter as Router,
  // HashRouter as Router1,
  Switch,
  Route,
  Link,
} from "react-router-dom";


const navbar = ({user}) =>  {

  return (

    <Router>

        <nav>
          
            
            <Link className="AraMatthew" to="/">Ara<span className = 'boldBlue'>Matthew</span></Link>
          

            {/* <Link className="links" to="/contact">Contact</Link>   */}
            <div className = "links">
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/experience">Experience</Link>              

            </div>


        </nav>


        <div className ="curr">
        
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
        </div>


    </Router>

  );
}









export default navbar;
