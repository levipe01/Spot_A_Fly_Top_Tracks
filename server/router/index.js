const router = require('express').Router();
const controllers = require('../controllers/index.js');

router.get('/', controllers.getTopTracks);

router.post('/', controllers.addTrack);

router.delete('/', controllers.deleteTrack);

router.put('/', controllers.updatePlayCount);

module.exports = router;