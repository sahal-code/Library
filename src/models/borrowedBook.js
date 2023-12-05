
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BorrowedBook = sequelize.define('BorrowedBook', {
  borrowedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  returnDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = BorrowedBook;
