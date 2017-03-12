import React from 'react';
import { connect } from 'react-redux';

const Stream = function ({ tracks = [] }) {
  return (
    <div>
      {
        tracks.map((track, key) => {
          return <div className="track" key={key}>{track.title}</div>;
        })
      }
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    tracks: state.track
  }
}

export default connect(mapStateToProps)(Stream);
