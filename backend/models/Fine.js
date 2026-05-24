const mongoose = require('mongoose');

const fineSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  issuedBook: { type: mongoose.Schema.Types.ObjectId, ref: 'IssuedBook' },
  amount: { type: Number, required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ['pending', 'paid'], default: 'pending' },
  paidAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Fine', fineSchema);
