const express = require('express');
const router = express.Router();
const { getIssuedBooks } = require('../controllers/bookController');
const { protect } = require('../middleware/auth');

router.get('/issued', protect, getIssuedBooks);

module.exports = router;
