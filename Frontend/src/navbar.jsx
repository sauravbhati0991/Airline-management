import React from "react";
import "./navbar.css";
function Navbar()
{
    return(
        <div className="header">    
            <div className="header-nav-logo">
            <img src="./src/assets/airplane_2200326.png" alt="img"></img>
            <div className="title">
            <p id="heading">FLyHigh</p>
            <p id="sub-heading">FLy High over the planet with us</p>
            </div>
            </div>               
            <div className="options">
            <a href="#menu">HOME</a>
            <a href="myflights.html">BOOK FLIGHTS</a>
            <a href="contact.html">CONTACT US</a>
            <a href="about.html">ABOUT US</a>
            </div> 
            <div id="btn">
            <button>LOGIN<img id="ig" src="./src/assets/enter.png"></img></button>
            </div>
        </div>
    )
}
export default Navbar