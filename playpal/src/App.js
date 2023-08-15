import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  const [location, setLocation] = useState({
    lat: 33.7701, // Default to Long Beach, CA
    lng: -118.1937
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const currentLatitude = position.coords.latitude;
        const currentLongitude = position.coords.longitude;
        setLocation({
          lat: currentLatitude,
          lng: currentLongitude
        });
      });
    } else {
      console.log("Geolocation not available");
    }
  }, []);

  return (
    <div className="App">
      <LoadScript googleMapsApiKey="AIzaSyB74jeDjVpazGYRaOP7ye40cOwotgox3DU">
        <GoogleMap
          center={location}
          zoom={10}
        >
          {/* Any additional components (like markers) would go here */}
        </GoogleMap>
      </LoadScript>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
