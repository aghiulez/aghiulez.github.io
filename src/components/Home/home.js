import React from 'react';
import { SocialIcon } from 'react-social-icons';
import ReactTypingEffect from 'react-typing-effect';


const Home = ({user}) => {
    return (
        <section id="home">
        <div className="inner">
            <h1>Hello, my name is <strong>{user.basics.name}</strong></h1> 
            <p>I am a <strong>{user.basics.region}</strong> based <strong>{user.basics.headline}</strong> with a strong inclination for problem-solving and seeing unique ideas come to life.</p>
            <ReactTypingEffect
                text="Hello, my name is <strong>{user.basics.name}</strong>" //text=["Hello.", "World!"]
            /> 
            <ul className = "socialLinks">
                <SocialIcon url="http://github.com/aghiulez" target="_blank" style={{ height: 75, width: 75 }} bgColor="#ffffff" />
                <span>   </span>
                <SocialIcon url="http://linkedin.com/in/aramatthew" target="_blank" style={{ height: 75, width: 75 }}/>
            </ul>

        </div>
        </section>
    );
}


export default Home;