import updateActionTypes from "./update.types";

const INITIAL_STATE = {
  sensor1Data: ["Nan"],
  sensor2Data: ["Nan"],
  sensor3Data: ["Nan"],
  sensor4Data: ["Nan"],
  sensor5Data: ["Nan"],
  sensor6Data: ["Nan"],
  sensor7Data: ["Nan"],
  sensor8Data: ["Nan"],
  sensor9Data: ["Nan"],
  sensor10Data: ["Nan"],
};

const myFirstReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case updateActionTypes.UPDATE_GET_SUCCESS:
      return { ...state, sensor1Data: action.payload };
    case updateActionTypes.UPDATE2_GET_SUCCESS:
      return { ...state, sensor2Data: action.payload };
    case updateActionTypes.UPDATE3_GET_SUCCESS:
      return { ...state, sensor3Data: action.payload };
    case updateActionTypes.UPDATE4_GET_SUCCESS:
      return { ...state, sensor4Data: action.payload };
    case updateActionTypes.UPDATE5_GET_SUCCESS:
      return { ...state, sensor5Data: action.payload };
    case updateActionTypes.UPDATE6_GET_SUCCESS:
      return { ...state, sensor6Data: action.payload };
    case updateActionTypes.UPDATE7_GET_SUCCESS:
      return { ...state, sensor7Data: action.payload };
    case updateActionTypes.UPDATE8_GET_SUCCESS:
      return { ...state, sensor8Data: action.payload };
    case updateActionTypes.UPDATE9_GET_SUCCESS:
      return { ...state, sensor9Data: action.payload };
    case updateActionTypes.UPDATE10_GET_SUCCESS:
      return { ...state, sensor10Data: action.payload };
    default:
      return state;
  }
};

export default myFirstReducer;
