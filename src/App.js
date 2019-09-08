import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import VictimForm from './VictimForm.js'
import Map from "./Map";
import places from "./places.json";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br/><br/>
        <Container>
          <Row>
            <Col><VictimForm/></Col>
            <Col>
              <Map
              center={{ lat: 39.961, lng: -75.176 }}
              zoom={10}
              places={places}
              />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
