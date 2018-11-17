import {tileProviders}from '../config/tileProviders'

export const TILE_CHANGED = "tile/TILE_CHANGED";

const initialState = {
  tileProviders: {
    selectedTile: "osm",
    providers: tileProviders
  }
};

/*
Reducer
--------
TILE_CHANGED: changes map tile
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case TILE_CHANGED:
      return {
        ...state,
        selectedTile: action.tile
      };

    default:
      return state;
  }
};

/*
Actions
--------
changeTile: dispatches change tile
*/
export const changeTile = tile => {
  return dispatch => {
    dispatch({
      type: TILE_CHANGED,
      tile: tile
    });
  };
};

/*
Utils
--------
changeTile: dispatches change tile
*/

