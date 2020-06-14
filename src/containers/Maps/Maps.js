import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import classes from "./Maps.css";

const API_KEY = "AIzaSyA3dTtlTCQ8KRXK0Ic71L3WF5wAQ0pHEvk";
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div className={classes.mapcontainer}>
        <Map
          google={this.props.google}
          zoom={18}
          initialCenter={{ lat: -38.032954, lng: 145.321804 }}
        >
          <Marker
            onMouseover={this.onMarkerClick}
            name={
              <div>
                <p>160 Sweeney Dr</p>
                <p>Narre Warren VIC 3805, Australia</p>
                <a
                  style={{
                    display: "table-cell",
                    fontWeight: "lighter",
                    textDecoration: "Underline",
                  }}
                  href="https://goo.gl/maps/LuRXqpztL6qwLaJW8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </div>
            }
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer);
