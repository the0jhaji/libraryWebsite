const { Book, IssuedBook } = require('../models/Book');

const searchBooks = async (req, res) => {
  try {
    const { q, filter, category, page: pageStr, available } = req.query;
    const page = parseInt(pageStr) || 1;
    const limit = 12;
    const skip = (page - 1) * limit;

    const query = q ? { title: { $regex: q, $options: 'i' } } : {};

    if (available === 'true') {
      query.status = 'available';
    }

    const total = await Book.countDocuments(query);
    const books = await Book.find(query).skip(skip).limit(limit);

    res.json({
      books: books.map((b) => ({
        _id: b._id,
        title: b.title,
        author: b.author,
        isbn: b.isbn,
        cover: b.cover,
        code: b.isbn,
        year: `c${b.createdAt?.getFullYear() || '2024'}`,
        description: b.author,
        status: b.status === 'available' ? 'Available' : b.status === 'issued' ? 'Borrowed' : 'On Shelf',
      })),
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('Search books error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

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

module.exports = { searchBooks, getIssuedBooks };
