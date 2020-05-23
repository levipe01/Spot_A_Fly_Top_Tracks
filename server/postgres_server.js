const express = require('express');
const morgan = require('morgan');
const db = require('./postgres_db.js');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('./client/dist'));

app.get('/data/toptracks', (req, res) => {
  const queryString = 'select * from songs where (artistid=$1)';
  const options = [req.query.id];//req.body.name

  db.query(queryString, options)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
});

app.post('/data/toptracks', (req, res) => {
  const queryString = 'INSERT INTO songs (name, artist, image, playcount, length) VALUES ($1, $2, $3, $4, $5)';
  const options = [req.body.name, req.body.artist, req.body.image, req.body.playCount, req.body.length];
  db.query(queryString, options)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
});

app.put('/data/toptracks', (req, res) => {
  const queryString = 'UPDATE songs SET playcount = $1 WHERE id = $2)';
  const options = [req.body.playCount, req.body.id];
  db.query(queryString, options)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
});

app.delete('/data/toptracks', (req, res) => {
  const queryString = 'DELETE FROM songs WHERE (name=$1)';
  const options = [req.body.name]; //req.body.name
  db.query(queryString, options)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
});

app.listen(port, () => console.log('Port:', port));