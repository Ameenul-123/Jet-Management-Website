import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import "./index.css"; // Ensure this file contains the styles

const Home = () => {
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate(); // For redirection

    const handleSearch = () => {
        if (fromCity && toCity && date) {
            navigate(`/flightinfo?from=${fromCity}&to=${toCity}&date=${date}`);
        } else {
            alert("Please fill all fields!");
        }
    };

    return (
        <>
            {/* Header with Background Image */}
            <header className="header-bg">
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

            {/* Main Content with Background Image */}
            <div className="container main-bg">
                <section id="home">
                    <h2>Home</h2>
                    <p>Discover premium jet booking services tailored to your needs.</p>
                    <div className="search-section">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="from">From (Departure):</label>
                            <Select
                                type="text"
                                id="from"
                                options={CITIES}
                                value={fromCity}
                                onChange={(e) => setFromCity(e.target.value)}
                                placeholder="Enter departure location"
                                isSearchable
                            />

                            <label htmlFor="to">To (Destination):</label>
                            <input
                                type="text"
                                id="to"
                                options={CITIES}
                                value={toCity}
                                onChange={(e) => setToCity(e.target.value)}
                                placeholder="Enter destination"
                                isSearchable
                            />

                            <label htmlFor="travel-date">Travel Date:</label>
                            <Select
                                type="date"
                                id="travel-date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />

                            <button type="button" onClick={handleSearch}>
                                Search
                            </button>
                        </form>
                    </div>
                </section>
            </div>

            <footer className="footer-bg">
                <p>&copy; 2025 JETMITHRA. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default Home;
