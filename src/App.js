import React, { Component } from 'react';
import './App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import VictimForm from './VictimForm.js'
import Map from "./Map";
import initial_places from "./places.json";
import './App.css';

import { getPlaces, subscribeToPlaces, subscribeToPost, subscribeToSupplied } from './socket';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };

    subscribeToPlaces((err, json) => {
      this.setState({ places: json.places });
    });

    subscribeToPost((err, json) => {
      var places = this.state.places;
      places.push(json);
      this.setState({ places: places });
    });

    subscribeToSupplied((err, json) => {
      var places = this.state.places;
      json.lists.forEach((field) => {
        var tmp = places.find(
          (place) => (place.id === field.id)
        );
        // field =
      });
    });
  }

  componentDidMount = () => {
    getPlaces();
  }

  render() {
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
                zoom={12}
                places={this.state.places}
                />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
