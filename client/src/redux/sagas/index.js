import { all } from "redux-saga/effects";
import contactsSaga from "./contactsSaga";

export default function* rootSaga() {
  yield all([...contactsSaga]);
}
