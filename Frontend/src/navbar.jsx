import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const isaboutPage = location.pathname === "/about";
  const [navbar, setnavbar] = useState(false);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    // Fetch user information from the backend
    const fetchUser = async () => {
        try {
            const response = await axios.get('/api/v1/user/', { withCredentials: true });
            setUser(response.data);
            console.log("Response", response.data)
        } catch (error) {
            console.error('Error fetching user', error);
            setUser(null);
        }
    };

    fetchUser();
  }, []);


const handleLogout = async(e) => {
    e.preventDefault();
    setUser(null);
    try {
        const response = await axios.post('/api/v1/user/logout');
         
        alert('Logout successful');
        
    } catch (error) {
        alert('Logout failed');
    }
}

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
      {user? (
        <div>
          <button onClick={handleLogout}>
            LOGOUT
          </button>
        </div>
        ) : (
          <Link to="/login">
            <button>
              LOGIN
              <img id="ig" src="./src/assets/enter.png" alt="login icon" />
            </button>
          </Link>
      )}
      </div>
    </div>
  );
}
export default Navbar;
