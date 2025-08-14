const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userpost = new Schema({
  name: String,
  email: String,
  date: Date,
  password: String,
  blogs:[
    {
        type: mongoose.Types.ObjectId,
        ref:"Blog"
    }
  ]
});

module.exports = mongoose.model("user", userpost);