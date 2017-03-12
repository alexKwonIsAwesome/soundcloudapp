import * as actionTypes from "../constants/actionTypes.js";

const initialState = [];

const trackReducer = function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TRACKS_SET:
      return setTracks(state, action);
    default:
      return state;
  }
};

const setTracks = function (state, action) {
  const { tracks } = action;
  return [ ...state, ...tracks ];
};

export default trackReducer;
