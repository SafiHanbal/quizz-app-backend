const express = require('express');
const { getQuizz } = require('../controllers/view.controller');

const router = express.Router();

router.get('/', getQuizz);

module.exports = router;
