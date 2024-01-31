import { createSelector } from "reselect";

const sensorAllData = (state) => state.sensorAllData;

export const selectSensorData = createSelector(
    [sensorAllData],
    (sensorAllData) => sensorAllData.sensor1Data
);

export const selectSensorData2 = createSelector(
    [sensorAllData],
    (sensorAllData) => sensorAllData.sensor2Data
);

export const selectSensorData3 = createSelector(
    [sensorAllData],
    (sensorAllData) => sensorAllData.sensor3Data
);

export const selectSensorData4 = createSelector(
    [sensorAllData],
    (sensorAllData) => sensorAllData.sensor4Data
);

export const selectSensorData5 = createSelector(
    [sensorAllData],
    (sensorAllData) => sensorAllData.sensor5Data
);

export const selectSensorData6 = createSelector(
    [sensorAllData],
    (sensorAllData) => sensorAllData.sensor6Data
);

export const selectSensorData7 = createSelector(
    [sensorAllData],
    (sensorAllData) => sensorAllData.sensor7Data
);

export const selectSensorData8 = createSelector(
    [sensorAllData],
    (sensorAllData) => sensorAllData.sensor8Data
);

export const selectSensorData9 = createSelector(
    [sensorAllData],
    (sensorAllData) => sensorAllData.sensor9Data
);

export const selectSensorData10 = createSelector(
    [sensorAllData],
    (sensorAllData) => sensorAllData.sensor10Data
);