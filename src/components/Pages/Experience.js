import React from 'react';




const Projects = ({user}) => {

    let backgroundUrl = 'https://media-exp1.licdn.com/dms/image/C560BAQEjzxdA4RUnWQ/company-logo_200_200/0?e=1591228800&v=beta&t=i7BEuooI00FJhvV-W1lv-fr-COfwaSxqDMNA8_mtNhQ'

    return (


        <section id="experience">

            
            {user.work.map(work => (
                
                <a href={work.website} className="link" target="_blank"  key={work.company}> 
                    <h1 className='position'> {work.position} </h1>
                    <img className ="gif" src={work.highlights[0]} ></img> 
                    <p>{work.summary}</p>
                    <div className='info'>
                        {/* <h1> {work.position} </h1> */}
                        {/* <p>{work.company}</p> */}
                    </div>
                </a>
            ))}


        </section>
    );
}


export default Projects;



