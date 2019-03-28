// Database Setup

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/topTracks');
const data = require('./z_seedData.js');

const db = mongoose.connection;

db.on('error', () => console.log('Error connecting to topTracks database...'));
db.once('open', () => console.log('Connected to topTracks database...'));

const songSchema = new mongoose.Schema({
  name: String,
  artist: String,
  image: String,
  playCount: Number,
  length: String
});

const Song = mongoose.model('Song', songSchema);


// // Seed Data Generator

db.dropDatabase()

const dummyData = (bands, songs, images) => {
  for (let i = 0; i < 100; i++) {
    let song = new Song({
      name: songs[i],
      artist: bands[i],
      image: images[i],
      playCount: Math.floor(Math.random() * 10000),
      length: `${Math.floor(3 + (Math.random() * 3))}:${Math.floor((Math.random() * 60).toFixed(2))}`
    })
    song.save();
  }
}

dummyData(data.bands, data.songs, data.images)

// module.exports = {
//   Song,
//   db
// }