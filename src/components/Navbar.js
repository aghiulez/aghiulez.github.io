import React, { useState } from "react";
import {
    Link
} from "react-router-dom";

const Page = () => {

    const [navOpen, setNavOpen] = useState(false);

    // return (
    //    <section class="flex items-center justify-between flex-wrap bg-teal-500 p-6" id='nav'>
    //     <nav class="flex items-center flex-shrink-0 text-white mr-6" className = {navOpen ? 'active' : ''}>


    //             <div class="fill-current h-8 w-8 mr-2" className ="header">
    //                 <Link class="font-semibold text-xl tracking-tight" className="AraMatthew" to="/">Ara<span className = 'boldBlue'>Matthew</span></Link>
    //                 <figure className="dropbtn" onClick={ () => { setNavOpen(!navOpen) } }/>
    //             </div>

    //             <div onClick={ () => { setNavOpen(!navOpen) } } id='links' className = "links"> 
    // <Link to="/about">About</Link>
    // <Link to="/projects">Projects</Link>
    // <Link to="/experience">Experience</Link>    
    // <Link to="/contact">Contact</Link>               
    //             </div>
    //     </nav>
    //     </section>

    // );


    return (
        <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                {/* <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">

                </svg> */}
                <span class="font-semibold text-xl tracking-tight">AraMatthew</span>
            </div>
            <div class="block lg:hidden">
                <button  class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"  >
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" >
                <div class="text-sm lg:flex-grow"  id='links' className = "links">
                    <Link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">About</Link>
                    <Link to="/projects" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Projects</Link>
                    <Link to="/experience" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Experience</Link>    
                    <Link to="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Contact</Link> 

                </div>
                {/* <div>
                    <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
                </div> */}
            </div>
        </nav>
    )


}


export default Page;