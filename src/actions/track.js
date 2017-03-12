import * as actionTypes from "../constants/actionTypes.js";

export const setTracks = function (tracks) {
  return {
    type: actionTypes.TRACKS_SET,
    tracks
  }
};
