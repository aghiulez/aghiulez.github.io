import React from 'react';

const Projects = ({user}) => {
    console.log("@ about")
    console.log(user.work)
    return (
           
            <h3 className ='feed'> {user.basics.summary} </h3>
        
    );
}


export default Projects;