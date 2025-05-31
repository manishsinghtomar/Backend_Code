// Import the Mongoose library:
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// load env config
dotenv.config();

// Create a connectDB as follows:


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOOSE_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;


// this file contain logic to connect mongodb