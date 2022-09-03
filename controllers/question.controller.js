const Question = require('../models/question.model');
const AppError = require('../utils/appError.utils');
const catchAsync = require('../utils/catchAsync.utils');

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
