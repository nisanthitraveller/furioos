import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import regImg from '../src/assets/images/regbg.png';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Perform registration logic here
        console.log('Register clicked');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        localStorage.setItem('furioos-login', JSON.stringify({ loggedIn: true }))
        navigate('/start');
    };

    return (
        <form onSubmit={handleRegister}>
            <h2>Register</h2>
            <div className="wrap-input100">
                {/* <label htmlFor="name">Name:</label> */}
                <input
                    type="text"
                    id="name"
                    className="input100"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="wrap-input100">
                {/* <label htmlFor="email">Email:</label> */}
                <input
                    type="email"
                    id="email"
                    className="input100"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="wrap-input100">
                {/* <label htmlFor="password">Password:</label> */}
                <input
                    type="password"
                    id="password"
                    className="input100"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className='container-login100-form-btn'>
            <button type="submit" className="login100-form-btn">Register</button>
            </div>
        </form>
    );
};

const RegisterPage = () => {
    return (
        <section className='limiter'>
       <div className="container-login100">
            <div className='wrap-login100'>
            <div className='login100-pic'>
                    <img src={regImg} />
                </div>
                <div className="login100-form">
                    <RegisterForm />
                </div>
           
            </div>
        </div>
        </section>
    );
};

export default RegisterPage;