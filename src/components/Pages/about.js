import React from 'react';
import SocialLinks from '../SocialLinks';

const About = ({user}) => {

    return (
            <section class="flex" id="about">

                  {/* <img className="profile-pic"  src={user.basics.picture} alt="Ara Matthew Profile Pic" /> */}
               
                <h1>{user.basics.name}</h1> 
                {/* <p>
                  {pageSummaryMapping.about}
                </p> */}
                <div className ='bio'> 
                    {/* <h1>About Me</h1> */}
                    <p> {user.basics.summary} </p>
                    {/* <p class="bg-gray-500"className='forwards'> Want to know more about me? Check out my <a href='/experience'> experience </a>and <a href='/projects'> projects!</a></p> */}
                </div> 
                <img class="  rounded-full" src ={user.basics.picture} alt="Ara Matthew Profile Pic" />
                {/* <div className ='contacts'> 
                    <h1>Contact</h1>
                    <SocialLinks user={user} />

                </div>  */}

            </section>
           
        
    );
}


export default About;