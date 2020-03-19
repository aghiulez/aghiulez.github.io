import React from 'react';
import SocialLinks from '../SocialLinks';

const About = ({user}) => {

    return (
            <section id="about">

                  {/* <img className="profile-pic"  src={user.basics.picture} alt="Ara Matthew Profile Pic" /> */}
                
                <div className ='bio'> 
                    <h1>Let me tell you a little something about myself...</h1>
                    <p> {user.basics.summary} </p>
                    <p className='forwards'> Want to know more about me? Check out my <a href='/experience'> experience </a>and <a href='/projects'> projects!</a></p>
                </div> 

                <div className ='contacts'> 
                    <h1>Contact</h1>
                    <SocialLinks user={user} />

                </div> 

            </section>
           
        
    );
}


export default About;