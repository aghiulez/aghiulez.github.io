import React from 'react';
import { useState } from 'react';


import Modal from 'react-modal';
Modal.setAppElement('#root');


const Projects = ({user}) => {


    // const [modalIsOpen, setModalIsOpen] = useState(false);


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
                                {/* <a href={project.summary} target='_blank'> CHECK IT OUT</a> */}
                                <p>{project.summary}</p>
                            </div>


                            

                            {/* <button onClick={() => setModalIsOpen(true) }> open modal</button> 
                            <Modal style={{overlay:{backgroundColor: 'transparent'}}} isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>

                                <iframe src="https://aramatthew.com/RehabASeal/" height="1000" width="1000"></iframe>
                            </Modal> */}




                    </div>
                
                ))}
            </div>


        </section>
    );
}




export default Projects;