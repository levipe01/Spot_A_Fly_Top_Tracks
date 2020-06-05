/* eslint-disable no-console */
const model = require('../models/index.js');
const redis = require('../../database/redis_db.js');

module.exports = {
  getTopTracks: (req, res) => {
    redis.getTopTracks(req.query.id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(() => {
        model.getTopTracksByArtistId(req)
          .then((data) => {
            if (!data.rows.length) {
              throw Error();
            } else {
              res.status(200).json(data.rows);
            }
            return data.rows;
          })
          .then((data) => {
            redis.addTrack(data);
          })
          .catch(() => {
            res.status(404).json('no data found');
          });
      });
  },

  addTrack: (req, res) => {
    model.addTrack(req)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((e) => {
        console.log(e);
        res.status(400).json(e);
      });
  },

  deleteTrack: (req, res) => {
    model.deleteTrackById(req)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((e) => {
        res.status(400).json(e);
      });
  },

  updatePlayCount: (req, res) => {
    model.updatePlayCountById(req)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((e) => {
        res.status(400).json(e);
      });
  },
};
