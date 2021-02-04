import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import axios from "axios";
import qs from "qs";

import {
  AIRPORT_SEARCH_FAILURE,
  AIRPORT_SEARCH_REQUEST,
  AIRPORT_SEARCH_SUCCESS,
  SEARCH_CLICK_FAILURE,
  SEARCH_CLICK_REQUEST,
  SEARCH_CLICK_SUCCESS,
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

function searchClickAPI(data) {
  console.log(data);
  axios.post("http://localhost:3002/search", data);
  // axios
  //   .post("https://partners.api.skysanner.net/apiservices/pricing/v1.0", {
  //     data: qs.stringify({
  //       cabinclass: "Economy",
  //       country: "KR",
  //       currency: "KRW",
  //       locale: "ko-KR",
  //       locationSchema: "iata",
  //       originplace: data.departure,
  //       destinationplace: data.arrival,
  //       outbounddate: data.startDate,
  //       inbounddate: data.endDate,
  //       adults: data.adult,
  //       children: data.child,
  //       infants: 0,
  //       stops: 0,
  //       pageIndex: 0,
  //       pageSize: 1,
  //       apikey: "prtl6749387986743898559646983194",
  //     }),
  //     headers: {
  //       "content-type": "application/x-www-form-urlencoded;charset=utf-8",
  //     },
  //   })
  //   .then((res) => console.log(res));
}

function* searchClick(action) {
  try {
    const result = yield call(searchClickAPI, action.data);
    // yield put({
    //   type: SEARCH_CLICK_SUCCESS,
    //   data: result,
    // });
  } catch (error) {
    console.error(error);
    yield put({
      type: SEARCH_CLICK_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchSearch() {
  yield takeLatest(AIRPORT_SEARCH_REQUEST, search);
}

function* watchSearchClick() {
  yield takeLatest(SEARCH_CLICK_REQUEST, searchClick);
}

export default function* searchSaga() {
  yield all([fork(watchSearch), fork(watchSearchClick)]);
}
