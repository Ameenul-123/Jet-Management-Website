import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./bookinfo.css";
import "./index.css";



const BookInfo = () => {
    const location = useLocation();
    const flight = location.state?.flight || {};

    const [formData, setFormData] = useState({
        name: '',
        EMID: '',
        purpose: '',
        from_city: flight.from_city || '',
        to_city: flight.to_city || '',
        date: flight.date || '',
        flight_name: flight.flight_name || '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://127.0.0.1:8000/addflightdetails/", {  // ✅ Corrected URL
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            const responseData = await response.json();
            console.log("Server Response:", responseData); // ✅ Print response
    
            if (!response.ok) {
                throw new Error(responseData.detail || "Failed to book flight");
            }
    
            alert("Booking confirmed successfully!");
        } catch (error) {
            console.error("Error booking flight:", error);
            alert("Error booking flight. Check console for details.");
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
                    <div className="booking-container">
                        <h2>Book Your Flight</h2>
                        <form onSubmit={handleSubmit}>
                            <label className=''>Name:</label>
                            <input type="text" name="name" placeholder='Name' value={formData.name} onChange={handleChange} required />

                            <label>EMID:</label>
                            <input type="text" name="EMID" placeholder='EMID (For example: EM-XXXX)' value={formData.EMID} onChange={handleChange} required />

                            <label>Purpose:</label>
                            <textarea name="purpose" placeholder='Purpose' value={formData.purpose} onChange={handleChange} required />

                            <label>From City:</label>
                            <input type="text" name="from_city" value={formData.from_city} readOnly />

                            <label>To City:</label>
                            <input type="text" name="to_city" value={formData.to_city} readOnly />

                            <label>Date:</label>
                            <input type="date" name="date" value={formData.date} readOnly />

                            <label>Flight Name:</label>
                            <input type="text" name="flight_name" value={formData.flight_name} readOnly />

                            <button type="submit">Confirm Booking</button>
                        </form>
                    </div>
            </div>  
        </>      
    );
};

export default BookInfo;
