const express = require('express');

const globalErrorHandler = require('./controllers/error.controller');
const questionRouter = require('./routes/question.route');

const app = express();

app.use(express.json());

app.use('/api/v1/question', questionRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'I am here working',
  });
});

app.use('*', (req, res) => {
  res.status(400).json({
    status: 'fail',
    message: 'This route is not defined',
  });
});

app.use(globalErrorHandler);

module.exports = app;
