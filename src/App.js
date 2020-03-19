import React from 'react';
import { useState, useEffect } from 'react'; 
// import localUser from './ifilter/myInfo.json';
import Page from './components/Active';
import Footer from './components/Footer';



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
    return ( <div>loading</div>);
  }
  return(
      <Page className="page" user={user} />

  );

}

export default App;
