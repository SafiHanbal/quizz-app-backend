const mongoose = require('mongoose');

const highScoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, `A high score must have Player's name`],
  },
  score: {
    type: Number,
    required: [true, 'A high score needs a score'],
  },
});

const HighScoreModel = mongoose.model('highScore', highScoreSchema);

module.exports = HighScoreModel;
