const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  lastname: {
    type: String,
    required: true,
    lowercase: true,
    maxLength: 50,
    minLength: 2,
  },
  firstname: {
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
  isfreelance: {type: mongoose.Schema.Types.ObjectId,
  ref: "Freelance",
  default: null,
  },
  iscompany: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Freelance",
  default: null,
},
  isadmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 10, (err, hashedPassword) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    this.password = hashedPassword;
    next();
  });
});

module.exports = mongoose.model("User", userSchema);
