const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cart",
  },
  orders: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "orders",
  },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
