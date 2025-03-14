import React, { useState, useEffect } from 'react';
import api from './api';
import './flightinfo.css'; // Importing external CSS
import './index.css'
import { Link, useLocation, useNavigate } from "react-router-dom";

const FlightInfo = () => {
    const [flightInfo, setFlightInfo] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    
    // Extract query parameters (from, to, date) from URL
    const searchParams = new URLSearchParams(location.search);
    const fromCity = searchParams.get('from').toUpperCase();
    const toCity = searchParams.get('to').toUpperCase();
    const date = searchParams.get('date');
  

  useEffect(() => {
    api.get(`getflight?fromCity=${fromCity}&toCity=${toCity}&date=${date}`)
      .then(res => {
        console.log(res.data);
        setFlightInfo(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [fromCity, toCity, date]);

  const handleBooking = (flight) => {
    navigate('/bookinfo', { state: { flight } });
  };

  if (flightInfo.length===0){
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
          {/* Header */}
          <div className="header">
            <div>AIRLINES</div>
            <div>DEPARTURE</div>
            <div>DURATION</div>
            <div>ARRIVAL</div>
            <div>BOOK</div>
          </div>
    <p className='text-center'>No Flights Available</p>
        </div>
        <footer>
                    <p>&copy; 2025 JETMITHRA. All Rights Reserved.</p>
                </footer>
            </>
      );
  }

  return (
    <>
            <header>
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
      {/* Header */}
      <div className="header">
        <div>AIRLINES</div>
        <div>DEPARTURE</div>
        <div>DURATION</div>
        <div>ARRIVAL</div>
        <div>BOOK</div>
      </div>

      {/* Flight Cards */}
      {flightInfo.map(flight => (
        <div key={flight.id} className="flight-card">
          <div className="grid-container">
            {/* Airline Info */}
            <div className="airline-info">
              <div className="logo">
                <div className="inner-logo"></div>
              </div>
              <div>
                <div className="flight-name">{flight.flight_name}</div>
                <div className="flight-subtext">{flight.flight_name}</div>
              </div>
            </div>

            {/* Departure */}
            <div className="flight-time">
              <div className="time">{flight.depart}</div>
              <div className="city">{flight.from_city}</div>
            </div>

            {/* Duration */}
            <div className="duration">
              <div className="duration-text">{flight.durat}</div>
              <div className="duration-line">
                <div className="line"></div>
                <div className="arrow">→</div>
              </div>
              <div className="nonstop">Nonstop</div>
            </div>

            {/* Arrival */}
            <div className="flight-time">
              <div className="time">{flight.arriv}</div>
              <div className="city">{flight.to_city}</div>
            </div>

            {/* Price */}
            <div className="price-container">
              {/* <div className="price">₹ {flight.price}</div> */}
              <button className="book-button" onClick={() => handleBooking(flight)}>
                BOOK NOW
                </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <footer>
                <p>&copy; 2025 JETMITHRA. All Rights Reserved.</p>
            </footer>
        </>
  );
};

export default FlightInfo;
