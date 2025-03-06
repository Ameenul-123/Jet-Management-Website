import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Contact = () => {
    return (
        <>
            <header className="header-bg">
                <div className="logo-section">
                    <img src="/logojet.png" alt="JETMITHRA Logo" className="logo" />
                </div>
                <h1>Welcome to JETMITHRA</h1>
                <p>Your gateway to luxury air travel</p>
            </header>
            <nav className="nav-bg">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/logreg">Login</Link>
            </nav>
            <div className="container contact-bg">
                <section id="contact">
                    <div className="contact-content">
                        <h2>Contact Us</h2>
                        <div className="contact-info">
                            
                            {/* Adding a contact form for better user interaction */}
                            <div className="contact-form">
                                <h3>Send us a message</h3>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name:</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            placeholder="Enter your name"
                                            required 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            placeholder="Enter your email"
                                            required 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message:</label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            placeholder="Type your message here"
                                            required 
                                            rows="5"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="button">Send Message</button>
                                </form>
                            </div>
                        </div>
                        <div className="contact-item">
                                <h3>Email</h3>
                                <p><a href="mailto:support@jetmithra.com">support@jetmithra.com</a></p>
                            </div>
                            <div className="contact-item">
                                <h3>Phone</h3>
                                <p><a href="tel:+1234567890">+123-456-7890</a></p>
                            </div>
                    </div>
                </section>
            </div>
            <footer >
                <p>&copy; 2025 JETMITHRA. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default Contact;
