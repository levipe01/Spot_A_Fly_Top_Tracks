import React from 'react';
import PropTypes from 'prop-types';
import Ellipsis from './Ellipsis.jsx';

function PopularTrack({ track }) {
  return (
    <div className="flex1">
      <div className="flex2">
        <div className="icon">
          <i className="fas fa-music" />
          <i className="fas fa-play" />
        </div>
        <div className="image">
          <img src={track.image} alt={track.name} />
        </div>
        <div className="trackName">
          {track.name}
        </div>
      </div>
      <div className="flex3">
        <Ellipsis />
        <div className="trackLength">
          {track.length}
        </div>
      </div>
    </div>
  );
}

PopularTrack.propTypes = {
  track: PropTypes.isRequired
  // menu: PropTypes.isRequired,
  // showMenu: PropTypes.isRequired,
};

export default PopularTrack;
