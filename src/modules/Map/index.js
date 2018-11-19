import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import {connect} from 'react-redux';
import { css } from "emotion";
import {bindActionCreators} from 'redux';
import {Tile} from './Tile';
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
        <Tile selectedTile={this.props.selectedTile} tileProviders={this.props.tileProviders}/>
      </Map>
    );
  }
}
const mapStateToProps = state => ({
  tileProviders:state.tile.tileProviders.providers,
  selectedTile:state.tile.selectedTile
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);
export const MapModule= connect(mapStateToProps, mapDispatchToProps)(MapWrapper);

