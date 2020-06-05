const redis = require('redis');
const config = require('../config.js');

const client = redis.createClient(config.cache);

const getTopTracks = (id) => new Promise((resolve, reject) => {
  client.get(id, (err, data) => {
    if (data === null || err) {
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
