import React from 'react';
import ReactTypingEffect from 'react-typing-effect';


const Home = ({user}) => {
    return (
        <section id="home">

            <h1>Hello, my name is <strong>{user.basics.name}</strong></h1> 
            <p>I am a <strong>{user.basics.region}</strong> based <strong>{user.basics.headline}</strong> with a strong inclination for problem-solving and seeing unique ideas come to life.</p>
            <ReactTypingEffect className='typingEffect'
                text="Learn more about me! "
            />
            
                <a href='/about'> <figure className = 'bottombtn'></figure></a>

            

            {/* <iframe src="https://aramatthew.com/RehabASeal/" height="1000" width="1000"></iframe> */}
            

        </section>
    );
}


export default Home;