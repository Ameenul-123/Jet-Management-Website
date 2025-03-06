import React from "react";
import './index.css'; // Assuming you have the styles defined in a CSS file
import { Link } from "react-router-dom";

const About = () => {
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
                <Link to="/logreg">Login</Link>
            </nav>
            <div className="container">
                <section id="about">
                    <h2>About Us</h2>
                    <div className="about-content">
                        <p>
                            Welcome to the <strong>JETMITHRA</strong>, an innovative platform redefining how jets are managed and booked. Designed with precision and efficiency in mind, our platform caters to a diverse range of users—from general travelers seeking seamless jet bookings to private individuals managing exclusive jets.
                        </p>
                        <h3>Our Mission</h3>
                        <p>
                            To bridge the gap between convenience and luxury, offering a user-centric solution that enhances every aspect of jet management. With cutting-edge technology and intuitive design, we empower users to streamline their aviation needs with ease and confidence.
                        </p>
                        <h3>Key Features</h3>
                        <ul>
                            <li>
                                <strong>User-Friendly Jet Booking:</strong> Effortlessly book jets with real-time availability tracking and customizable scheduling options tailored to your needs.
                            </li>
                            <li>
                                <strong>Exclusive Private Jet Management:</strong> Manage private jets with advanced tools for flight planning, crew assignments, and maintenance scheduling.
                            </li>
                            <li>
                                <strong>Secure and Reliable:</strong> Featuring robust payment gateways and industry-standard security measures to ensure your data and transactions are protected.
                            </li>
                            <li>
                                <strong>Comprehensive Functionality:</strong> From booking and scheduling to maintenance and crew management, we provide an all-in-one solution for jet management.
                            </li>
                        </ul>
                        <h3>Our Vision</h3>
                        <p>
                            To set a new benchmark for user-centered design in the aviation industry by delivering a platform that combines convenience, luxury, and technological innovation.
                        </p>
                    </div>
                </section>
            </div>
            <br />
            <br />
            <br />
            <footer>
                <p>&copy; 2025 JETMITHRA. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default About;
