const mongoose = require("mongoose");
require("dotenv").config();

function connectDB() {
  const uri = process.env.ATLAS_URI;
  mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    (err) => {
      err ? console.log(err) : console.log("DB is connected successfully");
    }
  );
}
module.exports = connectDB;
