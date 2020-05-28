/* eslint-disable no-console */
const db = require('../../database/index.js');

module.exports = {
  getTopTracksByArtistId: (req) => {
    const queryString = 'select * from songs where (artistid=$1) order by playcount desc limit 5';
    const options = [req.query.id];

    return db.query(queryString, options);
  },

  addTrack: (req) => {
    const queryString = 'INSERT INTO songs (name, artist, artistid, image, playcount, length) VALUES ($1, $2, $3, $4, $5, $6)';
    const options = [req.body.name, req.body.artist, req.body.artistid,
      req.body.image, req.body.playcount, req.body.length];

    return db.query(queryString, options);
  },

  deleteTrackById: (req) => {
    const queryString = 'DELETE FROM songs WHERE (id=$1)';
    const options = [req.query.id];

    return db.query(queryString, options);
  },

  updatePlayCountById: (req) => {
    const queryString = 'UPDATE songs SET playcount = $1 WHERE (id=$2)';
    const options = [req.body.playcount, req.body.id];
    console.log(options);

    return db.query(queryString, options);
  },
};
