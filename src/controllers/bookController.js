
const Book = require('../models/book');

async function createBook(req, res) {
  try {
    const bookData = req.body;
    const book = await Book.create({ title: bookData.title });
    res.json(book);
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllBooks(req, res) {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.error('Error retrieving books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  createBook,
  getAllBooks,
};
