import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const LoginRegister = () => {
    const [showRegister, setShowRegister] = useState(false); // State to toggle Register Form

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Add registration logic here
    };

    return (
        <>
            <header>
                <div className="logo-section">
                    <img src="/logojet.png" alt="JETMITHRA Logo" className="logo" />
                </div>
                <h1>Welcome to JETMITHRA</h1>
                <p>Your gateway to luxury air travel</p>
            </header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
            </nav>
            <div className="container">
                <section id="login">
                    <h2>Login or Register</h2>
                    <p>Access your account to manage bookings or create a new account to get started.</p>
                    <div className="form-container">
                        {!showRegister ? (
                            // Login Form
                            <div className="form-box">
                                <h3>Login</h3>
                                <form onSubmit={handleLogin}>
                                    <label htmlFor="login-username">Username:</label>
                                    <input type="text" id="login-username" name="username" placeholder="Enter your username" required />
                                    <label htmlFor="login-password">Password:</label>
                                    <input type="password" id="login-password" name="password" placeholder="Enter your password" required />
                                    <button type="submit" className="button">Login</button>
                                </form>
                                <p><Link to="/forgot-password" className="forgot-password">Forgot Password?</Link></p>
                                <button className="button new-user-button" onClick={() => setShowRegister(true)}>New User? Register Here</button>
                            </div>
                        ) : (
                            // Register Form
                            <div className="form-box">
                                <h3>Register</h3>
                                <form onSubmit={handleRegister}>
                                    <label htmlFor="register-username">Username:</label>
                                    <input type="text" id="register-username" name="username" placeholder="Choose a username" required />
                                    <label htmlFor="register-email">Email:</label>
                                    <input type="email" id="register-email" name="email" placeholder="Enter your email" required />
                                    <label htmlFor="register-password">Password:</label>
                                    <input type="password" id="register-password" name="password" placeholder="Choose a password" required />
                                    <label htmlFor="register-confirm-password">Confirm Password:</label>
                                    <input type="password" id="register-confirm-password" name="confirm-password" placeholder="Confirm your password" required />
                                    <button type="submit" className="button">Register</button>
                                    <br />
                                    <br />
                                    <button className="button back-to-login" onClick={() => setShowRegister(false)}>Back to Login</button>
                                </form>
                            </div>
                        )}
                    </div>
                </section>
            </div>
            <br /><br />
            <footer>
                <p>&copy; 2025 JETMITHRA. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default LoginRegister;
