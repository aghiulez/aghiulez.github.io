import React from 'react';


// UNDERSTAND BELOW: 
//we use the useEffect hook to make the request only when the component mounts by using an empty array [] 
//for the “watch” parameter. We store the result with the useState hook and will pass it to our portfolio components 
//which we’ll build in the upcoming sections.
import { useState, useEffect } from 'react'; 



import localUser from './ifilter/myInfo.json';
import Navbar from './components/Navigation/Navbar';



function App() {

  const [user, setUser] = useState(null);  //initial value of user is null 
  useEffect(() => {

    // NOTE: Use your username below
    fetch('https://gitconnected.com/v1/portfolio/aghiulez') // returns a promise containing the response 
      .then(res => res.json())
      .then(user => {
        console.log(user.basics)
        setUser(user);
      });
  }, []); //empty array (as second arg) will only call effect on initial render...
  

  return (
    <div className="contanier"> 
      <Navbar user={localUser} /* should be {user} later on */ />
    </div>
    
  );
}

export default App;
