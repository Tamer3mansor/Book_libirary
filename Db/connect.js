const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = (uri) => {
  const db = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return db;
};
module.exports = connectDB;
