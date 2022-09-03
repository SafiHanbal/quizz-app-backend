const express = require('express');

const {
  getAllQuestions,
  addNewQuestion,
  getARandomQuestion,
} = require('../controllers/question.controller');

const router = express.Router();

router.route('/').get(getAllQuestions).post(addNewQuestion);
router.route('/:difficulty').get(getARandomQuestion);

module.exports = router;
