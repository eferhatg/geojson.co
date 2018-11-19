import * as tile from "./tile";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("tile actions", () => {
  it("should create an action to change tile", () => {
    const selectedTile = "osm_mapnick";
    const expectedAction = {
      type: tile.TILE_CHANGED,
      tile: selectedTile
    };

    const store = mockStore({ tileProviders: {}, selectedTile: "" });
    expect(store.dispatch(tile.changeTile(selectedTile))).toEqual(
      expectedAction
    );
  });
});

describe("todos reducer", () => {
  it("should return the initial state", () => {
    const testState = {
      selectedTile: "osm_mapnick"
    };
    const expectedState = {
      selectedTile: "osm_bnw"
    };

    const testAction = {
      type: tile.TILE_CHANGED,
      tile: "osm_bnw"
    };

    expect(tile.default(testState, testAction)).toEqual(expectedState);
  });
});
