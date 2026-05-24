const Fine = require('../models/Fine');

const getFines = async (req, res) => {
  try {
    const fines = await Fine.find({ user: req.user._id })
      .populate({ path: 'issuedBook', populate: { path: 'book', select: 'title' } })
      .sort({ createdAt: -1 });

    const totalPending = fines
      .filter((f) => f.status === 'pending')
      .reduce((sum, f) => sum + f.amount, 0);

    res.json({
      totalPending,
      fines: fines.map((f) => ({
        _id: f._id,
        title: f.issuedBook?.book?.title || 'Unknown',
        reason: f.reason,
        amount: f.amount,
        status: f.status,
        date: f.createdAt.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      })),
    });
  } catch (error) {
    console.error('Get fines error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const payFines = async (req, res) => {
  try {
    const { fineIds } = req.body;

    if (!fineIds || !Array.isArray(fineIds) || fineIds.length === 0) {
      return res.status(400).json({ message: 'Please provide fine IDs' });
    }

    await Fine.updateMany(
      { _id: { $in: fineIds }, user: req.user._id, status: 'pending' },
      { $set: { status: 'paid', paidAt: new Date() } },
    );

    res.json({ message: 'Payment successful' });
  } catch (error) {
    console.error('Pay fines error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getFines, payFines };
