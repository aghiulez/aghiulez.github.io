import React from 'react';
import { SocialIcon } from 'react-social-icons';


const SocialLinks = ({user}) => {

    return (
            <div className="SocialLinks">


                {user.basics.profiles.map(profile => (


                
                    <div className = {profile.network} key ={profile.network}>
                        <SocialIcon url={profile.url} target="_blank" style={{ height: 30, width: 30 }} bgColor="#ffffff"/>
                        <em className="name"> {profile.network} </em>
                    </div>

                    
                    
                ))}
                <div>
                    <SocialIcon url="mailto:aghiulezian@gmail.com" network= 'email' style={{ height: 30, width: 30 }} bgColor="#ffffff"/>
                    <em className="name"> email </em>
                </div>
            </div>
           
        
    );
}


export default SocialLinks;