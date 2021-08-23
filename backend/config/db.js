require("dotenv").config();
const mongoose = require("mongoose");

const DB = process.env.DB_URL;

const connectDB = () => {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("DB connected");
    });
};

module.exports = connectDB;
