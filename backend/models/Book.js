const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  isbn: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  cover: { type: String },
  status: { type: String, enum: ['available', 'issued', 'damaged'], default: 'available' },
}, { timestamps: true });

const issuedBookSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  issuedDate: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true },
  returnedDate: { type: Date },
  renewals: { type: Number, default: 0, max: 3 },
  maxRenewals: { type: Number, default: 3 },
  status: { type: String, enum: ['issued', 'returned', 'overdue'], default: 'issued' },
}, { timestamps: true });

issuedBookSchema.virtual('isOverdue').get(function () {
  return !this.returnedDate && new Date() > this.dueDate;
});

issuedBookSchema.set('toJSON', { virtuals: true });

const Book = mongoose.model('Book', bookSchema);
const IssuedBook = mongoose.model('IssuedBook', issuedBookSchema);

module.exports = { Book, IssuedBook };
