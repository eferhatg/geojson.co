
export const SEARCH_ON_MAP = "search/SEARCH_ON_MAP";

const initialState = {
  searchQuery: "",
  searchResults:[]
};

/*
Reducer
--------
SEARCH_ON_MAP: fills search results
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ON_MAP:
      return {
        ...state,
        searchQuery: action.query,
        searchResults:[]
      };

    default:
      return state;
  }
};

/*
Actions
--------
searchOnMap: send searchOnMap action
*/
export const searchOnMap = query => {
  return dispatch => {
    return dispatch({
      type: SEARCH_ON_MAP,
      query: query
    });
  };
};

/*
Utils
--------
changeTile: dispatches change tile
*/

