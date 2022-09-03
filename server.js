const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.DATABASE_URI.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connection successful!'))
  .catch((err) => console.log(err.message));

app.listen(process.env.PORT, () => {
  console.log(`App is running on Port:${process.env.PORT}`);
});
