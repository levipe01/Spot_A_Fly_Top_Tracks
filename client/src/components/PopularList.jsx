import React from 'react';
import PropTypes from 'prop-types';
import PopularTrack from './PopularTrack.jsx';

function PopularList({ tracks }) {
  if (!tracks) return <h1 data-testid="loading">Loading...</h1>;
  
  return (
    <div data-testid="popular-list">
      {tracks.map(track => <PopularTrack key={track._id} track={track} />)}
    </div>
  );
}

PopularList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist: PropTypes.string,
    image: PropTypes.string.isRequired,
    playCount: PropTypes.number.isRequired,
    length: PropTypes.string.isRequired
  })).isRequired
};

export default PopularList;
