import { all, fork } from "redux-saga/effects";
import searchSaga from "./search";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(searchSaga)]);
}
