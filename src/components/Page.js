import Projects from './Pages/Projects.js';
import Home from './Pages/home.js';
import About from './Pages/about.js';
import Contact from './Pages/Contact.js';
import Experience from './Pages/Experience.js';



import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";



const Page = ({user}) =>  {
    return (
      <section id="page">
      <Switch >          
        <Route path="/contact">
          <div className = "pageSummary"> 
            <div className='container'>
                  <h1>Contact</h1>
                  <p>
                    If you'd like to reach me, feel free to contact me via <a href={'mailto:'+ user.basics.email}>email</a>, <a href={user.basics.profiles[2].url}>LinkedIn</a>, or the form below!
                  </p>
                </div>
          </div>
          <Contact />
        </Route>
        <Route path="/about">
          <div className = "pageSummary"> 
            <div className='container'>
                <img src ={user.basics.picture} alt="Ara Matthew Profile Pic" />
                <h1>Ara Matthew Ghiulezian</h1>
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
                  Showcased here are some of the projects I have worked on in the past. Chekout out my <a href={user.basics.profiles[1].url}>GitHub</a> for more details and projects.
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
                To find out more about each jobsite, click on the tab to find out more!
              </p>
            </div>
          </div>
          <Experience user = {user}/>
        </Route>

        <Route path="/">
          <Home user = {user}/>
        </Route>

      </Switch>
      </section>


    )
}

export default Page;