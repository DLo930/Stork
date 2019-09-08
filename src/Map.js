/*global google*/
import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  InfoWindow
} from "react-google-maps";
import { compose, withProps, withStateHandlers } from "recompose";
import Geocode from 'react-geocode';

Geocode.setApiKey('AIzaSyA1QldVMg5AlqLLo-7_DrOWJ50JgN8p9Cc');

Geocode.enableDebug();

Geocode.fromLatLng("48.8583701", "2.2922926").then(
  response => {
    const address = response.results[0].formatted_address;
    console.log(address);
  },
  error => {
    console.log(error);
  }
);

Geocode.fromAddress("Eiffel Tower").then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
  },
  error => {
    console.error(error);
  }
);


const MapWithPlaces = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDtGY1sjF7EfFjzxo9InYggxfMZgRHuJjk&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `80%` }} />,
    containerElement: <div style={{ height: "100vh", width: "100%"}} />,
    mapElement: <div style={{ height: "80%"}} />
  }),
  withStateHandlers(
    props => ({
      infoWindows: props.places.map(p => {
        return { isOpen: false };
      })
    }),
    {
      onToggleOpen: ({ infoWindows }) => selectedIndex => ({
        infoWindows: infoWindows.map((iw, i) => {
          iw.isOpen = selectedIndex === i;
          return iw;
        })
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
    {props.places &&
      props.places.map((place, i) => {
        let lat = parseFloat(place.location[0], 10);
        let lng = parseFloat(place.location[1], 10);
        console.log(place.items);

        return (
          <Marker
            id={place.id}
            key={place.id}
            position={{ lat: lat, lng: lng }}
            title="Click to zoom"
            onClick={props.onToggleOpen.bind(this, i)}
            defaultAnimation={google.maps.Animation.DROP}
          >
            {(
              <InfoWindow onCloseClick={props.onToggleOpen.bind(i)}>
                <div style={{color:"red"}}>
                  <ul>
                    {place.items.map(
                      (item) => {
                        return <li>{item}</li>;
                      })
                    }
                  </ul>
                  {`${place.location[0]} ${place.location[1]}`}
                  <br />
                  {place.time}
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
  </GoogleMap>
));

export default MapWithPlaces;
