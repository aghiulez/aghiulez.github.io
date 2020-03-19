import React from 'react';




const Projects = ({user}) => {


    return (


        <section id="experiencepage">

            
            {user.work.map(work => (
                
                // eslint-disable-next-line react/jsx-no-target-blank
                <a href={work.website} className="link" target="_blank"  key={work.company}> 
                    <img className ="gif" src={work.highlights[0]}  alt="logo"></img> 



                    <div className='info'>
                        <h1 className='position'> {work.position} </h1>
                        <h4 className='company'> {work.company} </h4>
                        <h5 className='dates'> {work.start.month}/{work.start.year} - {work.end.month}/{work.end.year} </h5>
                        <p>{work.summary}</p>
                    </div>
                </a>
            ))}


        </section>
    );
}


export default Projects;



