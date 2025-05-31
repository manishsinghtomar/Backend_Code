//importing mongoose library
const mongoose = require('mongoose');  
const dotenv = require('dotenv')

//load env configuration
dotenv.config();

// this function is used to connect with db , dont go with exact dynamic
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB


// We have added a hardcoded URL but that's not a good practice
//process.env. use to use mongodb_uri