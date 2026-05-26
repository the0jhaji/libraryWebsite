const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`MongoDB connection failed: ${error.message}`);
    console.log('Starting in-memory MongoDB...');
    try {
      const mongoServer = await MongoMemoryServer.create();
      const uri = mongoServer.getUri();
      const conn = await mongoose.connect(uri);
      console.log(`In-memory MongoDB connected: ${conn.connection.host}`);
    } catch (memError) {
      console.error(`In-memory MongoDB failed: ${memError.message}`);
      process.exit(1);
    }
  }
};

module.exports = connectDB;
