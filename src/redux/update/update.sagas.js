import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getUpdateData,
  getUpdate2Data,
  getUpdate3Data,
  getUpdate4Data,
  getUpdate5Data,
  getUpdate6Data,
  getUpdate7Data,
  getUpdate8Data,
  getUpdate9Data,
  getUpdate10Data,
} from "./update.action";
import updateActionTypes from "./update.types";
import {
  sensorFetch,
  sensorFetch2,
  sensorFetch3,
  sensorFetch4,
  sensorFetch5,
  sensorFetch6,
  sensorFetch7,
  sensorFetch8,
  sensorFetch9,
  sensorFetch10,
} from "./update.services";

function* getSensorFetch() {
  const sensor = yield call(sensorFetch);
  yield put(getUpdateData(sensor));
}

function* getSensorFetch2() {
  const sensor2 = yield call(sensorFetch2);
  yield put(getUpdate2Data(sensor2));
}

function* getSensorFetch3() {
  const sensor3 = yield call(sensorFetch3);
  yield put(getUpdate3Data(sensor3));
}

function* getSensorFetch4() {
  const sensor4 = yield call(sensorFetch4);
  yield put(getUpdate4Data(sensor4));
}

function* getSensorFetch5() {
  const sensor5 = yield call(sensorFetch5);
  yield put(getUpdate5Data(sensor5));
}

function* getSensorFetch6() {
  const sensor6 = yield call(sensorFetch6);
  yield put(getUpdate6Data(sensor6));
}

function* getSensorFetch7() {
  const sensor7 = yield call(sensorFetch7);
  yield put(getUpdate7Data(sensor7));
}

function* getSensorFetch8() {
  const sensor8 = yield call(sensorFetch8);
  yield put(getUpdate8Data(sensor8));
}

function* getSensorFetch9() {
  const sensor9 = yield call(sensorFetch9);
  yield put(getUpdate9Data(sensor9));
}

function* getSensorFetch10() {
  const sensor10 = yield call(sensorFetch10);
  yield put(getUpdate10Data(sensor10));
}

function* mySaga1() {
  yield takeLatest(updateActionTypes.FETCH_UPDATE_DATA, getSensorFetch);
}

function* mySaga2() {
  yield takeLatest(updateActionTypes.FETCH_UPDATE2_DATA, getSensorFetch2);
}

function* mySaga3() {
  yield takeLatest(updateActionTypes.FETCH_UPDATE3_DATA, getSensorFetch3);
}

function* mySaga4() {
  yield takeLatest(updateActionTypes.FETCH_UPDATE4_DATA, getSensorFetch4);
}

function* mySaga5() {
  yield takeLatest(updateActionTypes.FETCH_UPDATE5_DATA, getSensorFetch5);
}

function* mySaga6() {
  yield takeLatest(updateActionTypes.FETCH_UPDATE6_DATA, getSensorFetch6);
}

function* mySaga7() {
  yield takeLatest(updateActionTypes.FETCH_UPDATE7_DATA, getSensorFetch7);
}

function* mySaga8() {
  yield takeLatest(updateActionTypes.FETCH_UPDATE8_DATA, getSensorFetch8);
}

function* mySaga9() {
  yield takeLatest(updateActionTypes.FETCH_UPDATE9_DATA, getSensorFetch9);
}

function* mySaga10() {
  yield takeLatest(updateActionTypes.FETCH_UPDATE10_DATA, getSensorFetch10);
}

export function* mySaga() {
  yield all([
    call(mySaga1),
    call(mySaga2),
    call(mySaga3),
    call(mySaga4),
    call(mySaga5),
    call(mySaga6),
    call(mySaga7),
    call(mySaga8),
    call(mySaga9),
    call(mySaga10),
  ]);
}
