const { IssuedBook } = require('../models/Book');

const getIssuedBooks = async (req, res) => {
  try {
    const books = await IssuedBook.find({ user: req.user._id, status: 'issued' })
      .populate('book')
      .sort({ dueDate: 1 });

    const result = books.map((ib) => ({
      _id: ib._id,
      title: ib.book.title,
      isbn: ib.book.isbn,
      author: ib.book.author,
      cover: ib.book.cover,
      dueDate: ib.dueDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      renewals: ib.renewals,
      maxRenewals: ib.maxRenewals,
      status: ib.isOverdue ? 'urgent' : 'safe',
    }));

    res.json({ books: result });
  } catch (error) {
    console.error('Get issued books error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getIssuedBooks };
