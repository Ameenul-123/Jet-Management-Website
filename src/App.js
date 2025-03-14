import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Services from './services';
import Contact from './contact';
import Logreg from './logreg';
import Flightinfo from './flightinfo'
import FlightSearchResults from './flightsearchresults';
import BookInfo from './bookinfo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/logreg" element={<Logreg />} />
      <Route path="/flightinfo" element={<Flightinfo />} />
      <Route path="/flight" element={<FlightSearchResults />} />
      <Route path="/bookinfo" element={<BookInfo />} />
    </Routes>
  );
}

export default App;