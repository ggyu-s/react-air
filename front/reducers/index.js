import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import search from "./search";

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  search,
});

export default rootReducer;
