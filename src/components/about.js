import React from 'react';

const About = ({user}) => {
    console.log("@ about")
    return (
            <section id="about">

                  {/* <img className="profile-pic"  src={user.basics.picture} alt="Ara Matthew Profile Pic" /> */}
                
                <div className ='bio'> 
                    <h1>Let me tell you a little something about myself...</h1>
                    <p> {user.basics.summary} </p>
                </div> 

            </section>
           
        
    );
}


export default About;