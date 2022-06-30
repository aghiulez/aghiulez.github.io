import React from 'react';
import SocialLinks from '../SocialLinks';

const About = ({user}) => {

    return (
            <section class="flex py-16 pl-16 " id="about">

                  {/* <img className="profile-pic"  src={user.basics.picture} alt="Ara Matthew Profile Pic" /> */}
               
                
                {/* <p>
                  {pageSummaryMapping.about}
                </p> */}
                <div className ='bio'> 
                    {/* <h1>About Me</h1> */}
                    <h1 class="text-2xl">Hi my name is {user.basics.name.split(" ")[0]}!</h1> 
                    <p  class="py-6"> {user.basics.summary} </p>
                    {/* <p class="bg-gray-500"className='forwards'> Want to know more about me? Check out my <a href='/experience'> experience </a>and <a href='/projects'> projects!</a></p> */}
                </div> 
                <div class="px-16">
                    <img class="object-contain" src ={user.basics.picture} alt="Ara Matthew Profile Pic" />

                </div>
                {/* <div className ='contacts'> 
                    <h1>Contact</h1>
                    <SocialLinks user={user} />

                </div>  */}

            </section>
           
        
    );
}


export default About;