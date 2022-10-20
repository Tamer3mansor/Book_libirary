const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const models = new Schema(
  {
    title: {
      type: String,
      required: [true, 'must provide name'],
      trim: true,
      maxlength: [20],
    },
    author: {
      type: String,
      required: [true, 'must provide name'],
      trim: true,
      maxlength: [20],
    },
    gener: {
      type: String,
      required: [true, 'must provide name'],
      trim: true,
      maxlength: [20],
    },
    read: { type: Boolean, default: false },
  },
);

module.exports = mongoose.model('Book_model', models);
