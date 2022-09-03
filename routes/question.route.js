const express = require('express');

const {
  getAllQuestions,
  addNewQuestion,
} = require('../controllers/question.controller');

const router = express.Router();

router.route('/').get(getAllQuestions).post(addNewQuestion);

module.exports = router;
