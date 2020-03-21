import React from 'react';
import ProjectModal from '../ProjectModal';





const Projects = ({user}) => {


    return (
        <section id="projectspage">




            <div className='projects'> 
                {user.projects.map(project => (
                    
                    // eslint-disable-next-line react/jsx-no-target-blank
                    <div className = 'project'   key={project.name} >




                            <img className ="gif" src={project.website}  alt='gif of app'  />
                            <div className = 'information'> 
                                <h1 className='projectName'> {project.name} </h1>
                                    <div className ="languages">
                                        {project.languages.map(language => (
                                            
                                                <em key={language}>{language} </em>
                                        ))}
                                    <div className ="frameworks">
                                        {project.libraries.map(library => (
                                                <em key={library}>{library} </em>
                                        ))} 
                                    </div>
                                    </div>

                                <p>{project.summary}</p>

                            </div>

                            {/* <ProjectModal project={project} /> */}







                    </div>
                
                ))}
            </div>


        </section>
    );
}




export default Projects;