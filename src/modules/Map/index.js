import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import { css } from "emotion";
class MapWrapper extends Component {
  render() {
    const mapStyle = css`
      width: 100%;
      height: 100%;
      position: relative;
      left: 0px;
      top: 0px;
    `;
    const position = [51.505, -0.09];

    return (
      <Map ref="map" className={mapStyle} center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export const MapModule = MapWrapper;
