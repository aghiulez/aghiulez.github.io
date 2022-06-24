import React from 'react';
import { useState, useEffect } from 'react'; 
// import localUser from './ifilter/myInfo.json';
import Page from './components/Active';




const App = () => {
  const [user, setUser] = useState(null);  //initial value of user is null 
  useEffect( () => {
    fetch('https://gitconnected.com/v1/portfolio/aghiulez') // returns a promise containing the response 
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []); //empty array (as second arg) will only call effect on initial render...
  
  if(!user){
    console.log("nothing");
    return ( <div >   </div>);
  }
  return(
      <Page  user={user} />

  );

}

export default App;
