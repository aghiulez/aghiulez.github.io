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

    const pageSummaryMapping = user.interests.reduce(
      (obj, item) => Object.assign(obj, { [item.name]: item.keywords[0] }), {});

    return (
      <div class ="flex-1"  id="page">
      <Switch    >          
        <Route path="/contact">
          <div className = "pageSummary"> 
            <div className='container'>
                  <h1>Contact</h1>
                  <p>
                    {pageSummaryMapping.contact}
                  </p>
                </div>
          </div>
          <Contact />
        </Route>
        <Route path="/about">
          <div className = "pageSummary"> 
            <div className='container'>
                <img src ={user.basics.picture} alt="Ara Matthew Profile Pic" />
                <h1>{user.basics.name}</h1>
                <p>
                  {pageSummaryMapping.about}
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
                {pageSummaryMapping.projects}
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
              {pageSummaryMapping.experience}
              </p>
            </div>
          </div>
          <Experience user = {user}/>
        </Route>

        <Route path="/">
          <Home user = {user}/>
        </Route>

      </Switch>
      </div>


    )
}

export default Page;