const express = require('express');
const router = express.Router();
const { searchBooks, getIssuedBooks } = require('../controllers/bookController');
const { protect } = require('../middleware/auth');

router.get('/search', searchBooks);
router.get('/issued', protect, getIssuedBooks);

module.exports = router;
