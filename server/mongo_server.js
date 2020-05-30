/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const morgan = require('morgan');
const db = require('../database/mongo_db.js');

const app = express();
const PORT = 3000;


// Middelware Setup

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('./client/dist'));


// Routes Setup

app.get('/data/toptracks', (req, res) => {
  db.getTopTracks(req.query.id)
    .then((results) => {
      res.json(results);
    })
    .catch(console.log);
});

app.post('/data/toptracks', (req, res) => {
  db.addTrack(req.body)
    .then((results) => res.json(results))
    .catch(console.log);
});

app.delete('/data/toptracks', (req, res) => {
  db.removeTrack(req.query.id)
    .then((results) => res.json(results))
    .catch(console.log);
});

app.put('/data/toptracks', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  db.updatePlayCount(req.body._id)
    .then((results) => res.json(results))
    .catch(console.log);
});

// Server Setup

app.listen(PORT, (err) => {
  if (err) console.log('Error connecting to server...');
  else {
    console.log(`Server running on PORT: ${PORT}...`);
  }
});
