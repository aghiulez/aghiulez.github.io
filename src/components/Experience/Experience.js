import React from 'react';




const Projects = ({user}) => {

    let backgroundUrl = 'https://media-exp1.licdn.com/dms/image/C560BAQEjzxdA4RUnWQ/company-logo_200_200/0?e=1591228800&v=beta&t=i7BEuooI00FJhvV-W1lv-fr-COfwaSxqDMNA8_mtNhQ'

    return (


        <section id="experience">
        <div className="flexbox">
            
            {user.work.map(work => (
                
                <a href={work.website} className="link" target="_blank"  key={work.company}> 

                    <h1 className='position'> {work.position} </h1>
                    <div className = "project"  
                    style={
                        {
                            background:   `url(${work.highlights[0]}) no-repeat`,
                            backgroundSize: 'cover'
                        }
                            }
                            >

                        <div className='info'>
                            {/* <h1> {work.position} </h1> */}
                            {/* <p>{work.company}</p> */}
                        </div>

                    </div>
                </a>
            ))}

        </div>
        </section>
    );
}


export default Projects;



