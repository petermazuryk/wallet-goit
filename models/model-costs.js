const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const costsScheme = new Schema({
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  currency: {
    type: String,
  },
  created: {
    type: String,
  },
  modified: {
    type: String,
  },
  categories: {
    type: Array,
  },
});

costsModel = mongoose.model('cost', costsScheme);
module.exports = costsModel;
