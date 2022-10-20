const Book = require('../Models/booksmodel');

const getAll = async (req, res) => {
  try {
    const Books = await Book.find({});
    res.status(201).json({ Books });
    // eslint-disable-next-line no-empty
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// eslint-disable-next-line consistent-return
const getOne = async (req, res) => {
  try {
    const { id: bookId } = req.params;
    const Books = await Book.findOne({ _id: bookId });
    if (!Book) {
      res.status(404).json({ msg: `No task with id:${bookId}` });
    }
    res.status(200).json({ Books });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};
const add = async (req, res) => {
  try {
    const task = await Book.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const patch = async (req, res) => {
  try {
    const { id: bookId } = req.params;
    const Books = await Book.findOneAndUpdate({ _id: bookId }, req.body, {
      new: true, runValidators: true,
    });
    if (!Books) {
      res.status(404).json({ msg: `No task with id:${bookId}` });
    }
    res.status(200).json({ Books });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteBook = async (req, res) => {
  try {
    const { id: bookId } = req.params;
    const Books = await Book.findOneAndDelete({ _id: bookId });
    if (!Books) {
      res.status(404).json({ msg: `No task with id:${bookId}` });
    }
    res.status(200).json({ Books });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports = {
  getAll, getOne, add, patch, deleteBook,
};
