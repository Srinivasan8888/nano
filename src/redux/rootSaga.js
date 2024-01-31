import { all, call } from "redux-saga/effects";
import { mySaga } from "./update/update.sagas";

export default function* rootSaga() {
  yield all([call(mySaga)]);
}
