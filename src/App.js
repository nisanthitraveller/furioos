import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
const Home = lazy(() => import('./Home'));
const LoginPage = lazy(() => import('./LoginPage'));
const RegisterPage = lazy(() => import('./RegisterPage'));
const Start = lazy(() => import('./Start'));
const App = () => {
    return (
        <Suspense fallback={<div className="loading"><div className="loader-62"></div></div>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/start" element={<Start />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
