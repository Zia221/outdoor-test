// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process?.env?.MONGODB_URI);

    console.log(`MongoDB Connected `);
  } catch (error) {
    console.error('MongoDB Connection Error');
  }
};

module.exports = connectDB;