const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const seedUsers = [
  { uid: 'SJU-123456', password: 'password123', name: 'Alice Johnson', role: 'student' },
  { uid: 'SJU-789012', password: 'password123', name: 'Bob Smith', role: 'student' },
  { uid: 'j.doe@stjude.edu', password: 'password123', name: 'Dr. Jane Doe', role: 'staff', email: 'j.doe@stjude.edu' },
  { uid: 'm.wilson@stjude.edu', password: 'password123', name: 'Prof. Mark Wilson', role: 'staff', email: 'm.wilson@stjude.edu' },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await User.deleteMany({});
    console.log('Cleared existing users');

    for (const userData of seedUsers) {
      const user = await User.create(userData);
      console.log(`Created user: ${user.uid} (${user.role})`);
    }

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
