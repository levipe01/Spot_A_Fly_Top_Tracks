const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./mongo_db.js');

const app = express();


// Middelware Setup

app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(morgan('dev'));

// Routes Setup

app.get('/data/toptracks', (req, res) => {
  console.log(req.query.id)
  db.getTopTracks(req.query.id)
    .then(results => {
      console.log(results)
      res.json(results)
    })
    .catch(console.log);
});

app.post('/data/toptracks', (req, res) => {
  db.addTrack(req.body)
    .then(results => res.json(results))
    .catch(console.log);
});

app.delete('/data/toptracks', (req, res) => {
  db.removeTrack(req.query.id)
    .then(results => res.json(results))
    .catch(console.log);
});

app.put('/data/toptracks', (req, res) => {
  db.updatePlayCount(req.body._id)
    .then(results => res.json(results))
    .catch(console.log);
});


// Server Setup

const PORT = process.env.PORT || 3003;

app.listen(PORT, (err) => {
  if (err) console.log('Error connecting to server...');
  else {
    console.log(`Server running on PORT: ${PORT}...`);
  }
});
