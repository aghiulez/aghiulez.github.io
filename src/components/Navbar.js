import React, {useState} from "react";
import {
    Link
} from "react-router-dom";

const Page = ({user}) =>  {

    const [ navOpen, setNavOpen ] = useState(false);

    return (
       
        <nav className = {navOpen ? 'active' : ''}>


                <div className ="header">
                    <Link className="AraMatthew" to="/">Ara<span className = 'boldBlue'>Matthew</span></Link>
                    <figure className="dropbtn" onClick={ () => { setNavOpen(!navOpen) } }/>
                </div>

                <div onClick={ () => { setNavOpen(!navOpen) } } id='links' className = "links"> 
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/experience">Experience</Link>              
                </div>
        </nav>

    );
}
        
    
export default Page;