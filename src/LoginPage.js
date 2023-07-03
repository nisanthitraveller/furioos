import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import sideImg from '../src/assets/images/loginbg.png';


const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Login clicked');
        console.log('Email:', email);
        console.log('Password:', password);
        localStorage.setItem('furioos-login', JSON.stringify({ loggedIn: true }))
        navigate('/start');
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
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
            <button type="submit" className="login100-form-btn">Login</button>
            </div>
        </form>
    );
};

const LoginPage = () => {
    return (
        <section className='limiter'>
        <div className="container-login100">
            <div className='wrap-login100'>
                <div className='login100-pic'>
                    <img src={sideImg} />
                </div>
            <div className="login100-form">
               
                    <LoginForm />
                
                    <div class="text-center p-t-136 mt-3">
<a class="txt2" href="/register">
Create your Account
</a>
</div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default LoginPage;