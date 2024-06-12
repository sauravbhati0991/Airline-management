import React,{useState,useEffect} from "react";
import "./navbar.css";
import {Link} from 'react-router-dom'
function Navbar()
{  
    const [navbar,setnavbar]= useState(false);
    const changeBackground=()=>
        {
            if(window.scrollY >=400)
                {
                    setnavbar(true);
                }else{
                    setnavbar(false);
                }
        };
        window.addEventListener("scroll",changeBackground)
    return(
        <div className={navbar? "header active" : "header"}>    
            <div className="header-nav-logo">
            <img src="./src/assets/airplane_2200326.png" alt="img"></img>
            <div className="title">
            <p id="heading">FLyHigh</p>
            <p id="sub-heading">FLy High over the planet with us</p>
            </div>
            </div>               
            <div className="options">
            <Link to="/">HOME</Link>
            <Link to="myflights.html">BOOK FLIGHTS</Link>
            <Link to="contact.html">CONTACT US</Link>
            <Link to="about.html">ABOUT US</Link>
            </div> 
            <div id="btn">
            <Link to="/login"><button>LOGIN<img id="ig" src="./src/assets/enter.png"></img></button></Link>
            </div>
        </div>
    )
}
export default Navbar