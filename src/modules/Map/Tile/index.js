import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TileLayer } from "react-leaflet";
import { getSelectedTileDetails } from "./utils";

export class Tile extends PureComponent {
  render() {
    let mTile = getSelectedTileDetails(
      this.props.selectedTile,
      this.props.tileProviders
    );

    return (
      <TileLayer
        url={mTile.url}
        minZoom={mTile.minZoom ? mTile.minZoom : 0}
        maxZoom={mTile.maxZoom ? mTile.maxZoom : 18}
        attribution={mTile.attribution}
      />
    );
  }
}

Tile.propTypes = {
    selectedTile:PropTypes.string,
    tileProviders:PropTypes.array
};
