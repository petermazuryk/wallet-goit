require('./core/express-promise');
const express = require('express');
const morgan = require('morgan');
const port = 3000;
const db = require('./db');
const urlMongodb =
  'mongodb+srv://wallet:swordfish@cluster0-ccbix.mongodb.net/test?retryWrites=true&w=majority';
const apiRoutes = require('./routes/apiRoutes.js');

const app = express();

app.use(morgan('combined'));

app.use(
  express.json({
    extended: true,
    inflate: true,
    type: 'application/json',
    verify: undefined,
  }),
);

app.use(express.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Server is listening on ${port}`));

app.use('/api', apiRoutes);

db.connect(urlMongodb, function(err) {
  if (err) {
    return console.error('Something bad happened', err);
  }
  console.log('Mongo DB connected ...');
});
