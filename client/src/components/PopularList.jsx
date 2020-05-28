import React from 'react';
import PropTypes from 'prop-types';
import PopularTrack from './PopularTrack.jsx';

function PopularList({ tracks, setCurrentTrack }) {
  if (!tracks) return <h1 data-testid="loading">Loading...</h1>;

  return (
    <div data-testid="popular-list">
      {tracks.map((track) => (
        <PopularTrack
          // eslint-disable-next-line no-underscore-dangle
          key={track._id}
          track={track}
          setCurrentTrack={setCurrentTrack}
        />
      ))}
    </div>
  );
}

PopularList.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    playcount: PropTypes.number.isRequired,
    length: PropTypes.string.isRequired,
  })).isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
};

export default PopularList;
