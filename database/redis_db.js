const redis = require('redis');

const client = redis.createClient('redis://localhost:6379');

const getTopTracks = (id) => new Promise((resolve, reject) => {
  client.get(id, (err, data) => {
    if (data === null) {
      reject(err);
    } else {
      resolve(JSON.parse(data));
    }
  });
});

const addTrack = (track) => new Promise((resolve, reject) => {
  client.set(JSON.stringify(track[0].artistid), JSON.stringify(track), 'EX', 600, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports.getTopTracks = getTopTracks;
module.exports.addTrack = addTrack;
