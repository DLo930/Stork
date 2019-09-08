import React from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";

export class MapContainer extends React.Component {
    state = { userLocation: { lat: 0, lng: 0 }, loading: true };
  
    componentDidMount(props) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
  
          this.setState({
            userLocation: { lat: latitude, lng: longitude },
            loading: false
          });
        },
        () => {
          this.setState({ loading: false });
        }
      );
    }
  
    render() {
      const { loading, userLocation } = this.state;
      const { google } = this.props;
  
      if (loading) {
        return null;
      }

      return (
          <div style={{height:"100%", width:"100%"}}>
           <Map google={google} initialCenter={userLocation} zoom={10} />
          </div>
      );
    }
  }

  
export default GoogleApiWrapper({
    apiKey: "AIzaSyDtGY1sjF7EfFjzxo9InYggxfMZgRHuJjk"
})(MapContainer);
