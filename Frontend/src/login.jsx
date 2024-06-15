import React, { useState } from 'react';
import './style.css'; // Assuming you have a styles.css file for styling
function LoginComponent(){

    const [action,setAction]= useState('');

    const registerLink = () => {
        setAction('actively');
    };

    const loginLink = () => {
        setAction('');
    };

    return (
        <div className="login">
            <div className={`wrapper ${action}`}>
                <div className="form-box login">
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="email" placeholder="Email" required />
                            <i class='bx bxs-envelope'></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="register-link">
                            <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                        </div>
                    </form>
                </div>
                <div className="form-box register">
                    <form action="">
                        <h1>Registration</h1>
                        <div className="input-box">
                            <input type="text" placeholder="First name" required />
                            <i class='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Last name" required />
                            <i class='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email" required />
                            <i class='bx bxs-envelope'></i>
                        </div>
                        <div className="input-box">
                            <input type="tel" placeholder="Phone no" required />
                            <i class='bx bxs-phone'></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> I agree to the terms & conditions
                            </label>
                        </div>
                        <button type="submit" className="btn">Register</button>
                        <div className="register-link">
                            <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;