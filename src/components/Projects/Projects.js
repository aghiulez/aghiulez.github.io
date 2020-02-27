import React from 'react';


const Projects = ({user}) => {
    return (


        <section id="projects">
        <div className="flexbox">
            
            {user.projects.map(project => (
                <a href={project.githubUrl} key={project.name} > 
                    <div className = "project" >
                        <h1> {project.name} </h1>
                        <p>{project.summary}</p>
                    </div>
                </a>
            ))}

        </div>
        </section>
    );
}


export default Projects;