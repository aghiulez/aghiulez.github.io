import React from 'react';
import { SocialIcon } from 'react-social-icons';


const SocialLinks = ({user}) => {

    return (
            <div className="SocialLinks">


                {user.basics.profiles.map(profile => (


                
                    <a>
                        <SocialIcon url={profile.url} target="_blank" style={{ height: 30, width: 30 }} bgColor="#ffffff"/>
                        <text className="name"> {profile.network} </text>
                    </a>

                    
                    
                ))}
                <a>
                <SocialIcon url="mailto:aghiulezian@gmail.com" network= 'email' style={{ height: 30, width: 30 }} bgColor="#ffffff"/>
                <text className="name"> email </text>
                </a>
            </div>
           
        
    );
}


export default SocialLinks;