import {tileProviders}from '../config/tileProviders'

export const TILE_CHANGED = "tile/TILE_CHANGED";

const initialState = {
  tileProviders: {
    providers: tileProviders
  },
  selectedTile: "osm_mapnick"
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
export const changeTile = selectedTile => {
  return dispatch => {
    dispatch({
      type: TILE_CHANGED,
      tile: selectedTile
    });
  };
};

/*
Utils
--------
changeTile: dispatches change tile
*/

