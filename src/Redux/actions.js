import * as types from "./actionTypes";

export function updateDataArray(dataArray) {
  return { type: types.UPDATE_DATA_ARRAY, dataArray };
}

export function togglePlotDirection() {
  return { type: types.TOGGLE_PLOT_DIRECTION };
}

export function updateDataArraySize(dataArraySize) {
  return { type: types.UPDATE_DATA_ARRAY_SIZE, dataArraySize };
}

export function toggleIsSortRunning() {
  return { type: types.IS_SORT_RUNNING };
}

export function updateAlgorithm(algorithm) {
  return { type: types.UPDATE_ALGORITHM, algorithm };
}
