const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("your_mongodb_url");
  console.log("DB Connected");
};

module.exports = connectDB;