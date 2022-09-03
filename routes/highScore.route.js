const express = require('express');
const {
  getHighScores,
  addHighScore,
} = require('../controllers/highScore.controller');

const router = express.Router();

router.route('/').get(getHighScores).post(addHighScore);

module.exports = router;
