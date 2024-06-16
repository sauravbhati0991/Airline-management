import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const isaboutPage = location.pathname === "/about";
  const [navbar, setnavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 400) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div
      className={`navbar ${isaboutPage ? " about-navbar" : ""} ${navbar ? "header active" : "header"}`}
    >
      <div className="header-nav-logo">
        <img src="./src/assets/airplane_2200326.png" alt="img"></img>
        <div className="title">
          <p id="heading">FLyHigh</p>
          <p id="sub-heading">FLy High over the planet with us</p>
        </div>
      </div>
      <div className="options">
        <Link className="link" to="/">
          HOME
        </Link>
        <Link className="link" to="/book">
          BOOK FLIGHTS
        </Link>
        <Link className="link" to="/myflights">
          MY FLIGHTS
        </Link>
        <Link className="link" to="/contact">
          CONTACT US
        </Link>
        <Link className="link" to="/about">
          ABOUT US
        </Link>
      </div>
      <div id="btn">
        <Link className="link" to="/login">
          <button>
            LOGIN<img id="ig" src="./src/assets/enter.png"></img>
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
