import React from "react";
import { connect } from "react-redux";
import Stream from "./presenter";

const mapStateToProps = function (state, ownProps) {
  return {
    tracks: state.track
  }
}

export default connect(mapStateToProps)(Stream);
