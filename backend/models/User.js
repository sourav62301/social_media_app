const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter your name"],
  },
  avatar: {
    public_id: String,
    url: String,
  },
  email: {
    type: String,
    require: [true, "Please enter your mail"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    require: [true, "Enter your password"],
    minlength: [6, "Password must be at least 6 chars long"],
    select: false,
  },
  posts: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Post",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
