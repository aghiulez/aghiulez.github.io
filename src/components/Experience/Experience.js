import React from 'react';


const Projects = ({user}) => {
    return (


        <section id="projects">
        <div className="flexbox">
            
            {user.work.map(work => (
                <a href={work.website} target="_blank" key={work.company} > 
                    <div className = "project" >
                        <h1> {work.position} </h1>
                        <p>{work.company}</p>
                    </div>
                </a>
            ))}

        </div>
        </section>
    );
}


export default Projects;