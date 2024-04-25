const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://vedantjadhav324:XDgMwiw8U0lYRNPX@cluster0.qejg7hk.mongodb.net/?retryWrites=true&w=majority&appName=cluster0");
    console.log(`Mongo server run on ${mongoose.connection.host}`.bgGreen);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDB;
