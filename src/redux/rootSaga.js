import { watchGetData } from "../features/sagaSlice"
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([watchGetData()]);
}
