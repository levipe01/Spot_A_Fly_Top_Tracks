import React from 'react';
import PropTypes from 'prop-types';
import Ellipsis from './Ellipsis.jsx';

function PopularTrack({ track }) {
  if (!track) return null;
  return (
    <div className="flex1">
      <div className="flex2">
        <div data-testid="track-icon" className="icon">
          <i className="fas fa-music" />
          <i className="fas fa-play" />
        </div>
        <div className="image">
          <img
            data-testid="track-image"
            src={track.image}
            alt={track.name}
          />
        </div>
        <div data-testid="track-name" className="trackName">
          {track.name}
        </div>
      </div>
      <div className="flex3">
        <Ellipsis />
        <div data-testid="track-length" className="trackLength">
          {track.length}
        </div>
      </div>
    </div>
  );
}

PopularTrack.propTypes = {
  track: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    playCount: PropTypes.number.isRequired,
    length: PropTypes.string.isRequired,
  }).isRequired
};

export default PopularTrack;
