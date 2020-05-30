/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/topTracks';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  poolSize: 50,
});
const db = mongoose.connection;

db.on('error', () => console.log('Error connecting to topTracks database...'));
db.once('open', () => console.log('Connected to topTracks database...'));

const songSchema = new mongoose.Schema({
  name: String,
  artist: String,
  artistId: Number,
  image: String,
  playcount: Number,
  length: String,
});

const Song = mongoose.model('Song', songSchema);

const getTopTracks = (id) => new Promise((resolve, reject) => {
  Song.find({ artistId: `${id}` })
    .limit(5)
    .sort({ playcount: -1 })
    .exec((err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
});

const addTrack = (track) => {
  const newTrack = new Song(track);
  return new Promise((resolve, reject) => {
    newTrack.save(
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      },
    );
  });
};

const removeTrack = (track) => new Promise((resolve, reject) => {
  // eslint-disable-next-line no-underscore-dangle
  Song.deleteOne({ _id: `${track}` },
    (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
});


const updatePlayCount = (id) => Song.findOne({ _id: `${id}` })
  .then((doc) => {
    doc.playcount += 1;
    doc.save();
    return doc;
  });

module.exports.getTopTracks = getTopTracks;
module.exports.addTrack = addTrack;
module.exports.removeTrack = removeTrack;
module.exports.updatePlayCount = updatePlayCount;
