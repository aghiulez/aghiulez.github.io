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
          <div className = "pageSummary"> 
              <h1>Contact</h1>
              <p>
                  contact me
              </p>
          </div>
          <Contact />
        </Route>
        <Route path="/about">
          <div className = "pageSummary"> 
            <div className='container'>
                <img src ={user.basics.picture} alt="Ara Matthew Profile Pic" />
                <h1>Ara Matthew</h1>
                <p>
                Los Angeles based Software Engineer
                </p>
            </div>
          </div>
          <About className = "container" user = {user} />
        </Route>
        <Route path="/projects">
          <div className = "pageSummary"> 
              <div className='container'>
                <h1>Projects</h1>
                <p>
                </p>
              </div>
          </div>
          <Projects user = {user}/>
        </Route>

        <Route path="/experience">
          <div className = "pageSummary">
            <div className='container'> 
              <h1>Experience</h1>
              <p>
              </p>
            </div>
          </div>
          <Experience user = {user}/>
        </Route>
        <Route path="/">
          <Home user = {user}/>
        </Route>

      </Switch>


    )
}

export default Page;