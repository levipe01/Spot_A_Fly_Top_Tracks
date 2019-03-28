// Dependencies Setup

const express = require('express');
const morgan = require('morgan');
const app = express();
const db = require('./db.js');


// Middelware Setup

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(morgan('dev'));


// Routes Setup




// Server Setup

const PORT = process.env.PORT || 3003;

app.listen(PORT, (err) => {
  if(err) console.log('Error connecting to server...');
  else {
    console.log(`Server running on PORT: ${PORT}...`);
  }
});