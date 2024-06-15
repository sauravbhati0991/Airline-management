import React, { useState } from 'react';
import './style.css'; // Assuming you have a styles.css file for styling
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
function LoginComponent(){

    const [action,setAction]= useState('');

    const registerLink = () => {
        setAction('actively');
    };

    const loginLink = () => {
        setAction('');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/v1/user/login', { email, password });
            

            localStorage.setItem('token', response.data.token);    
            
            alert('Login successful');
            navigate('/');
        } catch (error) {
            alert('Login failed');
        }
    };


    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/v1/user/register', { email, password, firstName, lastName, phone });
            console.log("Response", response)
            localStorage.setItem('token', response.token);    
            alert('Registration successful');
            navigate('/');
        } catch (error) {
            alert('Registration failed');
        }
    };



    return (
        <div className="login">
            <div className={`wrapper ${action}`}>
                <div className="form-box login">
                    <form action="" onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <i class='bx bxs-envelope'></i>
                        </div>
                        <div className="input-box">
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />                            <i className='bx bxs-lock-alt'></i>
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
                    <form action="" onSubmit={handleRegister}>
                        <h1>Registration</h1>
                        <div className="input-box">
                            <input type="text" value={firstName} placeholder="First Name*" required  onChange={(e) => setFirstName(e.target.value)}/>  
                            <i class='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                            <input type="text" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>  
                            <i class='bx bxs-user'></i>
                        </div>
                        <div className="input-box">
                        <input type="text" value={email} placeholder="Email*" required  onChange={(e) => setEmail(e.target.value)}/>                            <i class='bx bxs-envelope'></i>
                        </div>
                        <div className="input-box">
                            <input type="tel" value={phone} placeholder="Phone Number*"  required  onChange={(e) => setPhone(e.target.value)}/>  
                            <i class='bx bxs-phone'></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password*"  required value={password} onChange={(e) => setPassword(e.target.value)} />                            <i className='bx bxs-lock-alt'></i>
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