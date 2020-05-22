const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/topTracks';
mongoose.connect(mongoURI, { useNewUrlParser: true });
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

const getTopTracks = () => {
  return new Promise((resolve, reject) => {
    Song.find({_id: "5ec71b8121e09c2197a353a3"})
    .limit(5)
    .exec(
      function(err, projects) {
        if (err) {
          reject(err);
        }
          resolve(projects)
      });
  });
}

const addTrack = (track) => {
  const newTrack = new Song(track)
  console.log(newTrack)
  return new Promise((resolve, reject) => {
    newTrack.save(
      function(err, projects) {
        if (err) {
          reject(err);
        }
          resolve(projects)
      });
  });
}

const updatePlayCount = (id, count) => {
  console.log(id, count)
  return new Promise((resolve, reject) => {
    Song.updateOne({ id: `${id}` }, { playCount: `${count}` },
      function(err, projects) {
        if (err) {
          reject(err);
        }
          resolve(projects)
      });
  });
}

module.exports.getTopTracks = getTopTracks;
module.exports.addTrack = addTrack;
module.exports.updatePlayCount = updatePlayCount;

