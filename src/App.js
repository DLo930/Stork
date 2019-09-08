import React from 'react';
import MapContainer from './MapContainer.js'
import './App.css';

import Map from "./Map";
import places from "./places.json";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MapContainer/> */}
        <Map
          center={{ lat: 39.961, lng: -75.176 }}
          zoom={10}
          places={places}
        />,
      </header>
    </div>
  );
}

export default App;
