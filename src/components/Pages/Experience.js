import React from 'react';




const Projects = ({user}) => {


    return (


        <section id="experiencepage">

            
            {user.work.map(work => (
                
                <a href={work.website} className="link" target="_blank"  key={work.company}> 
                    <img className ="gif" src={work.highlights[0]}  alt="logo"></img> 



                    <div className='info'>
                        <h1 className='position'> {work.position} </h1>
                        <p>{work.summary}</p>
                    </div>
                </a>
            ))}


        </section>
    );
}


export default Projects;



