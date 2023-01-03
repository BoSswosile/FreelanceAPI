const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    lastName: {
      type: String,
      required: true,
      lowercase: true,
      maxLength: 50,
      minLength: 2,
    },
    firstName: {
      type: String,
      required: true,
      lowercase: true,
      maxLength: 50,
      minLength: 2,
    },
    address: {
      type: String,
      required: true,
      lowercase: true,
      maxLength: 100,
      minLength: 2,
    },
    city: {
      type: String,
      required: true,
      lowercase: true,
      maxLength: 50,
      minLength: 2,
    },
    postal_code: {
      type: Number,
      required: true,
      lowercase: true,
      maxLength: 5,
      minLength: 5,
    },
    phone: {
      type: Number,
      required: true,
      lowercase: true,
      maxLength: 10,
      minLength: 10,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      length: 50,
    },
    password: {
      type: String,
      required: true,
    },
    isadmin: {
      type: Boolean,
      default: false,
    },
  },
);

module.exports = mongoose.model("User", userSchema);
