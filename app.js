const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const config = require('./config');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(
  config.mongodb_URI,
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  error => {
    if (error) console.log(error);
    console.log('DB connected ....');
  },
);

const PORT = config.PORT;

const apiRoutes = require('./routes/apiRoutes/apiRoutes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors('*'));
app.use(logger('dev'));

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server success started on ${PORT} port`);
});
