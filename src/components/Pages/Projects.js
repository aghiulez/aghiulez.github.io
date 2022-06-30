import React from 'react';
//import ProjectModal from '../ProjectModal';


//https://tailwindcomponents.com/component/plants-card
const projectCard = (project) => {
    return (
        //<div class="flex h-screen items-center justify-center bg-indigo-50 px-4">
        <div class="flex items-center justify-center p-4">
            <div class="max-w-xs overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                <img src={project.website} alt="gif of app" class="h-auto w-full" />
                <div class="p-5">
                    <p class="text-medium mb-5 text-gray-700">{project.name}</p>
                    <button class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">See More</button>
                </div>
            </div>
        </div>)
}



const Projects = ({user}) => {


    return (
        <section id="projectspage">




            <div className='projects'> 
                {user.projects.map(project => (
                    projectCard(project)
                    // <div className = 'project'   key={project.name} >




                    //         <img className ="gif" src={project.website}  alt='gif of app'  />
                    //         <div className = 'information'> 
                    //             <h1 className='projectName'> {project.name} </h1>
                    //                 <div className ="languages">
                    //                     {project.languages.map(language => (
                                            
                    //                             <em key={language}>{language} </em>
                    //                     ))}
                    //                 <div className ="frameworks">
                    //                     {project.libraries.map(library => (
                    //                             <em key={library}>{library} </em>
                    //                     ))} 
                    //                 </div>
                    //                 </div>

                    //             <p>{project.summary}</p>

                    //         </div>

                    //         {/* <ProjectModal project={project} /> */}







                    // </div>
                
                ))}
            </div>


        </section>
    );
}




export default Projects;