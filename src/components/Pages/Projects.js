import React from 'react';


const Projects = ({user}) => {
    return (

        
        <section id="projectspage">



            <div className='projects'> 
                {user.projects.map(project => (
                    <a className = 'project' href={project.githubUrl} target="_blank" key={project.name} >
                            
                            <img className ="gif" src={project.website}  alt='gif of app'/>
                            <div className = 'information'> 
                                <h1 className='projName'> {project.name} </h1>
                                    <div className ="lang">
                                        {project.languages.map(language => (
                                            
                                                <text><em>{language}</em> </text>
                                
                                        ))}
                                        <div className ="frames">
                                        {project.libraries.map(library => (
                                            
                                                <text><em>{library}</em> </text>
                                
                                        ))} </div>
                                    </div>
                                <p>{project.summary}</p>
                            </div>

                    </a>
                
                ))}
            </div>


        </section>
    );
}




export default Projects;