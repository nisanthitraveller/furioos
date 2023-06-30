import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

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
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
};

const LoginPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;