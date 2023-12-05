
const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');

router.post('/', borrowController.borrowBook);
router.get('/borrowedBooks', borrowController.getAllBorrowedBooks);

module.exports = router;
