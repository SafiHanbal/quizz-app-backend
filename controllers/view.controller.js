const AppError = require('../utils/appError.utils');
const catchAsync = require('../utils/catchAsync.utils');

exports.getQuizz = (req, res, next) => {
  return res.status(200).render('base');
};
