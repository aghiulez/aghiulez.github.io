import Projects from './Projects.js';
import Home from './home.js';
import About from './about.js';
import Contact from './Contact.js';
import Experience from './Experience.js';



import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


const navbar = ({user}) =>  {

  return (
    <section id="navbar">
    <Router>
      <div className='viewPage'>
        <nav>
          
          <div className = "topnav">
            
            <Link className="AraMatthew" to="/">Ara<span className = 'boldBlue'>Matthew</span></Link>
          

            {/* <Link className="links" to="/contact">Contact</Link>  */}
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

      </div>
    </Router>
    </section>
  );
}



// make their own components later on.....











export default navbar;
