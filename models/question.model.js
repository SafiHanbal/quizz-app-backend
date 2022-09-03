const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'A question object must have a question'],
    unique: [true, 'Question already exists'],
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard', 'expert'],
    required: [true, 'A question must have a difficulty'],
  },
  answerOptions: {
    type: [String],
    required: [true, 'A question must have options'],
    validate: {
      validator: function (value) {
        return value.length === 4;
      },
      message: 'A question must have four options',
    },
  },
  answerCorrect: {
    type: String,
    required: [true, 'A question must have a correct answer'],
  },
});

questionSchema.pre('save', function (next) {
  if (!this.answerOptions.includes(this.answerCorrect)) {
    return next(new Error('Correct answer should be in answers option.'));
  }
  next();
});

const Question = mongoose.model('question', questionSchema);

module.exports = Question;
