import React from 'react';
import { SocialIcon } from 'react-social-icons';


const SocialLinks = ({user}) => {

    return (
            <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0" className="SocialLinks">


                {user.basics.profiles.map(profile => (


                
                    <li className = {profile.network} key ={profile.network}>
                        {/* <SocialIcon class="mr-4 hover:underline md:mr-6 " url={profile.url} target="_blank" style={{ height: 30, width: 30 }} bgColor="#ffffff"/> */}
                        {/* <em className="name"> {profile.network} </em> */}
                        {/* <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a> */}

                    </li>

                    
                    
                ))}
                {/* <li>
                    <SocialIcon class="mr-4 hover:underline md:mr-6 " url={'mailto:'+ user.basics.email} network= 'email' style={{ height: 30, width: 30 }} bgColor="#ffffff"/>
                </li> */}
            </ul>
           
        
    );
}


export default SocialLinks;