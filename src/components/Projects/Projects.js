import React from 'react';


const Projects = ({user}) => {
    return (


        <section id="projects">
        <div className="flexbox">
            
            {user.projects.map(project => (
                <a href={project.githubUrl} target="_blank" key={project.name} > 
                    <div className = "project" >

                        <h1 className='projName'> {project.name} </h1>
                        <img className ="gif" src={project.website} className='gif'></img>

                    
                        
                        <p>{project.summary}</p>
                        <div className ="lang">
                            {/* {project.languages.map(language => (
                                
                                    <text>{language}</text>
                    
                            ))} */}
                        </div>
                    </div>
                </a>
            ))}

        </div>
        </section>
    );
}

// style={
//     {
//         background:   `url(${project.website}) no-repeat`,
//         backgroundSize: 'contain',
//         backgroundPosition: 'center center'
//     }
//         }/>



export default Projects;