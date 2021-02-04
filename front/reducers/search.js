export const initialState = {
  searchList: [],
  searchClickComp: [],
  searchLoading: false,
  searchDone: false,
  searchError: null,
  searchCilckLoading: false,
  searchCilckDone: false,
  searchCilckError: null,
};

export const AIRPORT_SEARCH_REQUEST = "AIRPORT_SEARCH_REQUEST";
export const AIRPORT_SEARCH_SUCCESS = "AIRPORT_SEARCH_SUCCESS";
export const AIRPORT_SEARCH_FAILURE = "AIRPORT_SEARCH_FAILURE";

export const SEARCH_CLICK_REQUEST = "SEARCH_CLICK_REQUEST";
export const SEARCH_CLICK_SUCCESS = "SEARCH_CLICK_SUCCESS";
export const SEARCH_CLICK_FAILURE = "SEARCH_CLICK_FAILURE";

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
    case SEARCH_CLICK_REQUEST:
      return {
        ...state,
        searchCilckLoading: true,
        searchCilckDone: false,
        searchCilckError: null,
      };
    case SEARCH_CLICK_SUCCESS:
      return {
        ...state,
        searchCilckLoading: false,
        searchCilckDone: true,
        searchClickComp: action.data,
      };
    case SEARCH_CLICK_FAILURE:
      return {
        ...state,
        searchCilckLoading: true,
        searchCilckDone: false,
        searchCilckError: null,
      };
    default:
      return state;
  }
};

export default reducer;
