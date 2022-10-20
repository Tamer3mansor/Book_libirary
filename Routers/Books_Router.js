const express = require('express');
const {
  getAll, getOne, add, patch, deleteBook,
} = require('../controller/Book_conroller');

const Routs = express.Router();

Routs.route('/api')
  .get(getAll)
  .post(add);
Routs.route('/api:id')
  .get(getOne)
  .post(add)
  .delete(deleteBook)
  .patch(patch);

module.exports = Routs;
