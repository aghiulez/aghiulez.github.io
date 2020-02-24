import React from 'react';

const About = ({user}) => {
    console.log("@ about")
    return (
           
            <h3 className ='feed'> {user.basics.summary} </h3>
        
    );
}


export default About;