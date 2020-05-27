const model = require('../models/index.js');

module.exports = {
  getTopTracks: (req, res) => {
    model.getTopTracksByArtistId(req)
      .then((data) => {
        res.status(200).json(data.rows);
      })
      .catch((e) => {
        res.status(400).json(e);
      });
  },

  addTrack: (req, res) => {
    model.addTrack(req)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((e) => {
        console.log(e)
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