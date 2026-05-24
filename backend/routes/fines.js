const express = require('express');
const router = express.Router();
const { getFines, payFines } = require('../controllers/fineController');
const { protect } = require('../middleware/auth');

router.get('/', protect, getFines);
router.post('/pay', protect, payFines);

module.exports = router;
