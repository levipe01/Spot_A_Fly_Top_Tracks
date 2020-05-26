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

const getTopTracks = (id) => {
  return new Promise((resolve, reject) => {
    Song.find({artistId: id})
    .limit(5)
    .sort({playcount: -1})
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

const removeTrack = (track) => {
  console.log(track)
  return new Promise((resolve, reject) => {
    Song.deleteOne( { "_id" : `${track}` },
      function(err, projects) {
        if (err) {
          reject(err);
        }
          resolve(projects)
      });
  });
}

const updatePlayCount = (id) => {
  return Song.findOne({ "_id" : `${id}` }).then((doc) => {
    console.log(JSON.stringify(doc))
    doc.playCount++
    doc.save()
    return doc

  })
  // return new Promise((resolve, reject) => {
  //   Song.updateOne({ "_id" : `${id}` }, {"$set": { "playcount": count } },
  //     function(err, projects) {
  //       if (err) {
  //         reject(err);
  //       }
  //         resolve(projects)
  //     });
  // });
}

module.exports.getTopTracks = getTopTracks;
module.exports.addTrack = addTrack;
module.exports.removeTrack = removeTrack;
module.exports.updatePlayCount = updatePlayCount;

