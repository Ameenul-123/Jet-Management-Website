import React, { useState } from "react";
import './index.css';
import { Link } from "react-router-dom";

const Services = () => {
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (section) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section]
    );
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
        <Link to="/logreg">Login</Link>
      </nav>
      <div className="container">
        <section id="services">
          <h2>Our Services</h2>
          <div className="about-content">
            <ServiceSection
              title="Jet Booking Services"
              content={
                <>
                  <p>
                    Effortlessly book jets tailored to your travel plans. Whether
                    it's a short domestic trip or a long international journey, our
                    platform ensures a smooth and hassle-free booking experience.
                    Key features include:
                  </p>
                  <ul>
                    <li>Real-time jet availability tracking</li>
                    <li>Customizable scheduling options</li>
                    <li>Secure payment gateways for worry-free transactions</li>
                  </ul>
                </>
              }
              isExpanded={expandedSections.includes("Jet Booking Services")}
              toggle={() => toggleSection("Jet Booking Services")}
            />
            <ServiceSection
              title="Exclusive Private Jet Management"
              content={
                <>
                  <p>
                    For private jet owners, we provide a suite of management tools
                    to handle every aspect of your jet's operations, including:
                  </p>
                  <ul>
                    <li>Flight planning and scheduling</li>
                    <li>Crew assignment and management</li>
                    <li>Maintenance tracking and reminders</li>
                  </ul>
                </>
              }
              isExpanded={expandedSections.includes("Exclusive Private Jet Management")}
              toggle={() => toggleSection("Exclusive Private Jet Management")}
            />
            <ServiceSection
              title="Luxury Travel Experience"
              content={
                <p>
                  Enhance your journey with our bespoke travel options. From VIP
                  amenities to personalized in-flight services, we ensure every
                  detail of your trip is taken care of.
                </p>
              }
              isExpanded={expandedSections.includes("Luxury Travel Experience")}
              toggle={() => toggleSection("Luxury Travel Experience")}
            />
            <ServiceSection
              title="Customer Support"
              content={
                <p>
                  Our dedicated support team is available 24/7 to assist with your
                  bookings, manage schedules, and address any concerns. We
                  prioritize your satisfaction at every step.
                </p>
              }
              isExpanded={expandedSections.includes("Customer Support")}
              toggle={() => toggleSection("Customer Support")}
            />
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button 
                className="button" 
                onClick={() => alert("Redirecting to booking page...")}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#003366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                Book Now
              </button>
            </div>
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

const ServiceSection = ({ title, content, isExpanded, toggle }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3
      style={{ 
        cursor: "pointer", 
        color: isExpanded ? "#00509e" : "#003366",
        marginBottom: '1rem',
        fontSize: '1.5rem',
        transition: 'color 0.3s ease'
      }}
      onClick={toggle}
    >
      {title} {isExpanded ? '▼' : '▶'}
    </h3>
    {isExpanded && <div className="service-content">{content}</div>}
  </div>
);

export default Services;