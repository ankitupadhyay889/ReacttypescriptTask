import React from 'react';
import GoogleMapReact from 'google-map-react';

const Googl = () => {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        
        <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyANPEhfIAA2LIai0w2eNFMzOObkKEB1uic",
        }}
        defaultCenter={{ lat: 28.704060, lng: 77.102493 }}
        defaultZoom={10}
        >
          
        </GoogleMapReact>

      </div>
    );
  }

export default Googl;