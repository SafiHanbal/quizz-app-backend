const path = require('path');
const express = require('express');
const compression = require('compression');

const globalErrorHandler = require('./controllers/error.controller');
const questionRouter = require('./routes/question.route');
const highScoreRouter = require('./routes/highScore.route');
const viewRouter = require('./routes/view.routes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(compression());

app.use('/quizz', viewRouter);
app.use('/api/v1/question', questionRouter);
app.use('/api/v1/high-score', highScoreRouter);

app.use('*', (req, res) => {
  res.status(400).json({
    status: 'fail',
    message: 'This route is not defined',
  });
});

app.use(globalErrorHandler);

module.exports = app;
