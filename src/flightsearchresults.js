import React from 'react';

const FlightSearchResults = () => {
  const flights = [
    {
      id: 1,
      airline: 'SpiceJet',
      flightNumber: 'SG-169',
      departure: {
        time: '21:40',
        city: 'Delhi'
      },
      arrival: {
        time: '23:50',
        city: 'Mumbai'
      },
      duration: '02h 10m',
      price: 4999
    },
    {
      id: 2,
      airline: 'Air India',
      flightNumber: 'AI-2999',
      departure: {
        time: '22:00',
        city: 'Delhi'
      },
      arrival: {
        time: '00:15',
        city: 'Mumbai'
      },
      duration: '02h 15m',
      price: 5205
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="grid grid-cols-5 mb-4 text-gray-600 px-4">
        <div>AIRLINES</div>
        <div>DEPARTURE</div>
        <div>DURATION</div>
        <div>ARRIVAL</div>
        <div>PRICE</div>
      </div>

      {/* Flight Cards */}
      {flights.map(flight => (
        <div key={flight.id} className="bg-white rounded-lg shadow-md mb-4 p-4">
          <div className="grid grid-cols-5 items-center">
            {/* Airline Info */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <div>
                <div className="font-semibold">{flight.airline}</div>
                <div className="text-sm text-gray-500">{flight.flightNumber}</div>
              </div>
            </div>

            {/* Departure */}
            <div>
              <div className="text-xl font-semibold">{flight.departure.time}</div>
              <div className="text-gray-500">{flight.departure.city}</div>
            </div>

            {/* Duration */}
            <div className="flex flex-col items-center">
              <div className="text-gray-500">{flight.duration}</div>
              <div className="flex items-center">
                <div className="h-px w-24 bg-gray-300"></div>
                <div className="mx-2">→</div>
              </div>
              <div className="text-gray-500">Nonstop</div>
            </div>

            {/* Arrival */}
            <div>
              <div className="text-xl font-semibold">{flight.arrival.time}</div>
              <div className="text-gray-500">{flight.arrival.city}</div>
            </div>

            {/* Price */}
            <div className="flex justify-between items-center">
              <div className="text-2xl font-semibold text-red-500">₹ {flight.price}</div>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightSearchResults;