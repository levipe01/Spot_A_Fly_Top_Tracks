import React from 'react';
import PropTypes from 'prop-types';
import PopularTrack from './PopularTrack.jsx';

function PopularList({ tracks }) {
  return (
    <div>
      {tracks.map(track => <PopularTrack key={track._id} track={track} />)}
    </div>
  );
}

PopularList.propTypes = {
  tracks: PropTypes.isRequired,
};

export default PopularList;
