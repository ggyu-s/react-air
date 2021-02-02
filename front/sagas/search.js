import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import axios from "axios";
import {
  AIRPORT_SEARCH_FAILURE,
  AIRPORT_SEARCH_REQUEST,
  AIRPORT_SEARCH_SUCCESS,
} from "../reducers/search";

function searchAPI(data) {
  return axios.get(
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/KR/KRW/ko-KR/",
    {
      params: {
        query: data,
      },
      headers: {
        "x-rapidapi-key": "469557a336mshd2e8b79d6b4248ep17d5bcjsn0394592f4758",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      },
    }
  );
}

function* search(action) {
  try {
    const result = yield call(searchAPI, action.data);
    yield put({
      type: AIRPORT_SEARCH_SUCCESS,
      data: result,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: AIRPORT_SEARCH_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchSearch() {
  yield takeLatest(AIRPORT_SEARCH_REQUEST, search);
}

export default function* searchSaga() {
  yield all([fork(watchSearch)]);
}
