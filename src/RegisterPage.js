import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

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
        // Call API
        /*const response = await axios({
            method: "post",
            url: API_URLS.REGISTER,
            data: {name: name, email: email, password: password},
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.data) {
            return response.data;
        }*/
        localStorage.setItem('furioos-login', JSON.stringify({ loggedIn: true }))
        navigate('/start');
    };

    return (
        <form onSubmit={handleRegister}>
            <h2>Register</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
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
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    );
};

const RegisterPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;