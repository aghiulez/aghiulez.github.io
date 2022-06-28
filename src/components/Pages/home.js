import React from 'react';
import ReactTypingEffect from 'react-typing-effect';


const Home = ({ user }) => {
    return (
        <section class="bg-black grow " id="home">

            <div class="pt-4 px-4">
                <h1 class="text-green-500">> Hello, my name is <strong>{user.basics.name}</strong></h1>
                <p class="text-green-500">> I am a <strong>{user.basics.region}</strong> based <strong>{user.basics.headline}</strong> with a strong inclination for problem-solving and seeing unique ideas come to life.</p>
                <ReactTypingEffect class="text-green-500" className='typingEffect'
                    text="Learn more about me! "
                />

                <a href='/about'> <figure className='bottombtn'></figure></a>



                {/* <iframe src="https://aramatthew.com/RehabASeal/" height="600" width="960"></iframe> */}


            </div>


        </section>
    );
}


export default Home;