import React from 'react';
import './App.css';

import VictimForm from './VictimForm.js'
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
        />
        <VictimForm/>
      </header>
    </div>
  );
}

export default App;
