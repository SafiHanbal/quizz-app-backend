const Question = require('../models/question.model');
const AppError = require('../utils/appError.utils');
const catchAsync = require('../utils/catchAsync.utils');

const getQueryWithExcludedQuesAndSpecificDiff = (req, next) => {
  // Check for valid difficulty
  const difficulty = req.params;
  const validDifficulties = ['easy', 'medium', 'hard', 'expert'];
  if (!validDifficulties.includes(difficulty.difficulty))
    return next(
      new AppError('Difficulty must be easy, medium, hard or expert', 400)
    );

  // Query all questions with a specific difficulty
  const query = Question.find(difficulty);

  // Exclude previous questions using id
  const { exclude } = req.query;
  const excludeQuestions = exclude ? exclude.split(',') : [];
  query.find({
    _id: { $nin: excludeQuestions },
  });

  return query;
};

exports.getAllQuestions = catchAsync(async (req, res, next) => {
  const questions = await Question.find();

  if (!questions)
    return next(new AppError('Unable to find data. Try again later.', 404));

  res.status(200).json({
    status: 'success',
    result: questions.length,
    data: {
      questions,
    },
  });
});

exports.addNewQuestion = catchAsync(async (req, res, next) => {
  const question = await Question.create(req.body);

  if (!question) return next(new AppError('Unable to create question.', 400));

  res.status(200).json({
    status: 'success',
    data: {
      question,
    },
  });
});

exports.getARandomQuestion = catchAsync(async (req, res, next) => {
  // Count number of remaining questions
  const count = await getQueryWithExcludedQuesAndSpecificDiff(
    req,
    next
  ).count();

  if (!count) return next(new AppError('Unable to get question count', 404));

  const query = getQueryWithExcludedQuesAndSpecificDiff(req, next);

  // Generate a random number within the range
  const randomNum = Math.floor(Math.random() * count);

  // skip document based on random number and limit to 1
  query.skip(randomNum).limit(1);

  // Execute query
  const question = await query;
  if (!question) return next(new AppError('Unable to find question', 404));
  // Return question
  res.status(200).json({
    status: 'success',
    data: {
      question,
    },
  });
});
