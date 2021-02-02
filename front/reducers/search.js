export const initialState = {
  searchList: [],
  searchLoading: false,
  searchDone: false,
  searchError: null,
};

export const AIRPORT_SEARCH_REQUEST = "AIRPORT_SEARCH_REQUEST";
export const AIRPORT_SEARCH_SUCCESS = "AIRPORT_SEARCH_SUCCESS";
export const AIRPORT_SEARCH_FAILURE = "AIRPORT_SEARCH_FAILURE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AIRPORT_SEARCH_REQUEST:
      return {
        ...state,
        searchLoading: true,
        searchDone: false,
        searchError: null,
      };
    case AIRPORT_SEARCH_SUCCESS:
      return {
        ...state,
        searchLoading: false,
        searchDone: true,
        searchList: action.data.data.Places,
      };
    case AIRPORT_SEARCH_FAILURE:
      return {
        ...state,
        searchLoading: true,
        searchDone: false,
        searchError: null,
      };
    default:
      return state;
  }
};

export default reducer;
