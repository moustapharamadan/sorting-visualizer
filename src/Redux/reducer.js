import * as types from "./actionTypes";
import initialState from "./initialState";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_DATA_ARRAY:
      return { ...state, dataArray: action.dataArray };
    case types.TOGGLE_PLOT_DIRECTION:
      return { ...state, isHorizontalDirection: !state.isHorizontalDirection };
    case types.UPDATE_DATA_ARRAY_SIZE:
      return { ...state, dataArraySize: action.dataArraySize };
    default:
      return state;
  }
}
