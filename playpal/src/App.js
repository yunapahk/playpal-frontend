// Import required modules and components
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  // State for the current location
  const [location, setLocation] = useState({
    lat: 33.7701, // Default to Long Beach, CA
    lng: -118.1937
  });

  // Effect hook to fetch user's geolocation
  useEffect(() => {
    // Check if geolocation is available in the browser
    if ("geolocation" in navigator) {
      // Get the current position
      navigator.geolocation.getCurrentPosition(function(position) {
        const currentLatitude = position.coords.latitude;
        const currentLongitude = position.coords.longitude;
        
        // Update the location state with user's current position
        setLocation({
          lat: currentLatitude,
          lng: currentLongitude
        });
      });
    } else {
      console.log("Geolocation not available");
    }
  }, []); // Empty dependency array means this useEffect will run only once after the component is mounted

  return (
    <div className="App">
      {/* Load Google Maps Script */}
      <LoadScript googleMapsApiKey="AIzaSyB74jeDjVpazGYRaOP7ye40cOwotgox3DU">
        {/* Google Map component */}
        <GoogleMap
          center={location} // Set the center of the map to the current location
          zoom={10}
        >
        </GoogleMap>
      </LoadScript>
      <Header />  
      <Outlet /> 
    </div>
  );
}

export default App;
