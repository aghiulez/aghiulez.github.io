import React from 'react';
import ReactTypingEffect from 'react-typing-effect';


const Home = ({ user }) => {
    // https://tailwindcomponents.com/component/mac-terminal
    return (
        <section class="bg-black grow bg-[url('https://512pixels.net/downloads/macos-wallpapers-thumbs/10-5--thumb.png')] " id="home">

            {/* <div class="pt-4 px-4">
                <h1 class="text-green-500">> Hello, my name is <strong>{user.basics.name}</strong></h1>
                <p class="text-green-500">> I am a <strong>{user.basics.region}</strong> based <strong>{user.basics.headline}</strong> with a strong inclination for problem-solving and seeing unique ideas come to life.</p>
                <ReactTypingEffect class="text-green-500" className='typingEffect'
                    text="Learn more about me! "
                />

                <a href='/about'> <figure className='bottombtn'></figure></a>





            </div> */}


            <div class="w-1/2 mx-auto pt-16">
                <div class="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
                    <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
                        <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
                        </div>
                        <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
                        </div>
                        <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
                        </div>
                        <div class="mx-auto pr-16" id="terminaltitle">
                            <p class="text-center text-sm">Terminal</p>
                        </div>

                    </div>
                    <div class="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
                        <p class="pb-1">Last login: Wed Sep 25 09:11:04 on ttys002</p>
                        <p class="pb-1">➜ Hello, my name is <strong>{user.basics.name}</strong></p>
                        <p class="pb-1">➜ I am a <strong>{user.basics.region}</strong> based <strong>{user.basics.headline}</strong> with a strong inclination for problem-solving and seeing unique ideas come to life</p>
                    </div>
                </div>
            </div>


        </section>
    );
}


export default Home;