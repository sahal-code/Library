
const Book = require('../models/book');
const BorrowedBook = require('../models/borrowedBook');

async function borrowBook(req, res) {
  try {
    const borrowData = req.body;
    const { bookId, duration } = borrowData;

    const book = await Book.findByPk(bookId);

    if (!book) {
      res.status(404).json({ error: 'Book not found' });
      return;
    }

    const borrowedDate = new Date().toISOString();
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + duration);

    const borrowedBook = await BorrowedBook.create({
      borrowedDate,
      returnDate,
      BookId: bookId,
    });

    res.json(borrowedBook);
  } catch (error) {
    console.error('Error borrowing book:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllBorrowedBooks(req, res) {
  try {
    const borrowedBooks = await BorrowedBook.findAll();
    res.json(borrowedBooks);
  } catch (error) {
    console.error('Error retrieving borrowed books:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  borrowBook,
  getAllBorrowedBooks,
};
