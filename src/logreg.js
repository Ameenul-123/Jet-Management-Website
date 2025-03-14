import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const LoginRegister = () => {
    const [showRegister, setShowRegister] = useState(false);
    const [user, setUser] = useState(null);  // ✅ State to track logged-in user

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
    
        try {
            const response = await fetch("http://127.0.0.1:8000/login/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
    
            const data = await response.json(); // ✅ Read response data
    
            if (response.ok) {
                alert(`Login successful! Welcome, ${data.username}`);
                setUser(data);  // ✅ Store user info in React state
            } else {
                alert(data.message || "Invalid username or password.");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Error connecting to server.");
        }
    };

    const handleLogout = () => {
        setUser(null);  // ✅ Clear user data on logout
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

                {user ? (
                    <>
                        <span>Welcome, {user.username}</span>  
                        <Link to="#" onClick={handleLogout}>Logout</Link>  
                    </>
                ) : (
                    <Link to="/logreg">Login</Link>
                )}
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
                                <button className="button new-user-button" onClick={() => setShowRegister(true)}>New User? Register Here</button>
                            </div>
                        ) : (
                            // Register Form
                            <div className="form-box">
                                <h3>Register</h3>
                                <form onSubmit={() => {}}>
                                    <label htmlFor="register-username">Username:</label>
                                    <input type="text" id="register-username" name="username" placeholder="Choose a username" required />
                                    <label htmlFor="register-email">Email:</label>
                                    <input type="email" id="register-email" name="email" placeholder="Enter your email" required />
                                    <button type="submit" className="button">Register</button>
                                    <button className="button back-to-login" onClick={() => setShowRegister(false)}>Back to Login</button>
                                </form>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            <footer>
                <p>&copy; 2025 JETMITHRA. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default LoginRegister;
