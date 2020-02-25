import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


const Home = ({user}) => {
    console.log("@ home") //
    var name = "noname";
    var region = "noplace";
    try{   // figure out why i get null if not in try.... something to do with hooks?
        console.log(user.basics.name);
        name = user.basics.name;
        region = user.basics.region;
    }
    catch(err){
        console.log(err);
    }

    return (

        <div className="inner">
            <h1>Hello, my name is <strong>{name}</strong></h1> 
            <p>I am a <strong>{region}</strong> based <strong>Software Engineer</strong> with a strong inclination for problem-solving and seeing unique ideas come to life.</p> 
            <ul className = "socialLinks">
                <SocialIcon url="http://github.com/aghiulez" target="_blank" style={{ height: 100, width: 100 }} bgColor="#ffffff" />
                <span>   </span>
                <SocialIcon url="http://linkedin.com/in/aramatthew" target="_blank" style={{ height: 100, width: 100 }}/>
            </ul>

        </div>
    );
}


export default Home;