const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const { Book, IssuedBook } = require('./models/Book');
const Fine = require('./models/Fine');

dotenv.config();

const seedUsers = [
  { uid: 'SJU-123456', password: 'password123', name: 'Alice Johnson', role: 'student' },
  { uid: 'SJU-789012', password: 'password123', name: 'Bob Smith', role: 'student' },
  { uid: 'j.doe@stjude.edu', password: 'password123', name: 'Dr. Jane Doe', role: 'staff', email: 'j.doe@stjude.edu' },
  { uid: 'm.wilson@stjude.edu', password: 'password123', name: 'Prof. Mark Wilson', role: 'staff', email: 'm.wilson@stjude.edu' },
];

const seedBooks = [
  { title: 'Quantum Physics: A Modern Approach', isbn: '978-0131103627', author: 'K. Townsend', cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBYvIArVKSFQ-cvzQhNndHgzCdpuaU_rOQsHIKeXsqKZQOLdisR9bnb9x3bD_eFZsLjLCVR8XcjhKe6O23n43-ZI5Xj3zosMClerzVAzbKq9Ec9oUEj2XRpPPa0vfxId8U9KzIZ2d8mfbpFgY3qgD959TdGTX_QeT2cZa0LvG7J6gesMCwGuOnfPL8AdRiJsyzJMU1oNbEDz94DdH_n-Uh6GDq47Qz8jMzw6FdjctMEGXcGDgGeaC9SH1BFQqjRiJcUvcIqX9qeu8', status: 'issued' },
  { title: 'Introduction to Algorithms', isbn: '978-0262033848', author: 'Cormen et al.', cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1wFD9zj9ZM0acMQMk6B7cBPefGbifv8DGjixs5RSPBCNju1f2Tds4p27UD84YRO1cCHzW1sUUWKub89181V71LKIbYR4Ap37ri4LHoeNDLuTN-0h1jRvmR4zYnHjrnAup82JEKdAif6fAuqUeVO4BUn4zNMim0Pv2iSo1srBBQVYm0D1xWgqZM0SN6tyWLYHaVOM2S22CgKUtugjuqMKtcCxlG8Dc5OuLAR4KyH-RwhvXoe5eM8mrbB1ghW0-rQ7AFyH2Gm5mevg', status: 'issued' },
  { title: 'Linear Algebra & Its Applications', isbn: '978-0135367971', author: 'Gilbert Strang', status: 'available' },
  { title: 'Machine Learning', isbn: '978-0070428072', author: 'Tom Mitchell', status: 'available' },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await User.deleteMany({});
    await Book.deleteMany({});
    await IssuedBook.deleteMany({});
    await Fine.deleteMany({});
    console.log('Cleared existing data');

    const users = [];
    for (const userData of seedUsers) {
      const user = await User.create(userData);
      users.push(user);
      console.log(`Created user: ${user.uid} (${user.role})`);
    }

    const books = [];
    for (const bookData of seedBooks) {
      const book = await Book.create(bookData);
      books.push(book);
      console.log(`Created book: ${book.title}`);
    }

    const student = users[0];
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 2);
    const dueDate2 = new Date();
    dueDate2.setDate(dueDate2.getDate() + 15);

    const issued1 = await IssuedBook.create({
      user: student._id, book: books[0]._id,
      dueDate, renewals: 2, maxRenewals: 3, status: 'issued',
    });
    console.log(`Issued book: ${books[0].title} to ${student.uid}`);

    const issued2 = await IssuedBook.create({
      user: student._id, book: books[1]._id,
      dueDate: dueDate2, renewals: 0, maxRenewals: 3, status: 'issued',
    });
    console.log(`Issued book: ${books[1].title} to ${student.uid}`);

    await Fine.create([
      { user: student._id, issuedBook: issued1._id, amount: 15, reason: 'Late Return - 5 days', status: 'pending' },
      { user: student._id, issuedBook: issued2._id, amount: 12.5, reason: 'Damaged Cover', status: 'pending' },
    ]);
    console.log('Created fines for student');

    console.log('\nSeed complete!');
    console.log('Test credentials:');
    console.log('  Student: SJU-123456 / password123');
    console.log('  Staff:   j.doe@stjude.edu / password123');

    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
}

seed();
