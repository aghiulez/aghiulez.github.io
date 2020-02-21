import React from 'react';


// UNDERSTAND BELOW: 
//we use the useEffect hook to make the request only when the component mounts by using an empty array [] 
//for the “watch” parameter. We store the result with the useState hook and will pass it to our portfolio components 
//which we’ll build in the upcoming sections.
import { useState, useEffect } from 'react'; 

//import logo from './logo.svg';
import './App.css';

function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    // NOTE: Use your username below
    fetch('https://gitconnected.com/v1/portfolio/aghiulez')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}  
        {
          <p>Welcome to Ara Matthew's Online Portfolio</p>
        }

        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        
        <a
          className="App-link"
          href="https://github.com/aghiulez"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          className="App-link"
          href="https://github.com/aghiulez"
          target="_blank"
          rel="noopener noreferrer"
        >
          FaceBook
        </a>

        <a
          className="App-link"
          href="https://github.com/aghiulez"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>

        <a
          className="App-link"
          href="https://github.com/aghiulez"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

      </header>
    </div>
  );
}

export default App;
