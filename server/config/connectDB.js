const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); //Enter your mongodb url
    console.log(`Mongo server run on ${mongoose.connection.host}`.bgGreen);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDB;
