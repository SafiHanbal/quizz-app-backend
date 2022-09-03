const AppError = require('../utils/appError.utils');
const catchAsync = require('../utils/catchAsync.utils');

const HighScore = require('../models/highScore.model');

exports.getHighScores = catchAsync(async (req, res, next) => {
  const highScores = await HighScore.aggregate([
    {
      $sort: { score: -1 },
    },
    {
      $limit: 5,
    },
  ]);

  if (!highScores) return next(new AppError('Unable to find high scores', 404));

  res.status(200).json({
    status: 'success',
    results: highScores.length,
    data: {
      highScores,
    },
  });
});

exports.addHighScore = catchAsync(async (req, res, next) => {
  const highScore = await HighScore.create(req.body);

  if (!highScore)
    return next(new AppError('Error in creating high score', 400));

  res.status(200).json({
    status: 'success',
    data: {
      highScore,
    },
  });
});
