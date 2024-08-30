const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
  {
    productId: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productImage: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
    },
  },
  { _id: false }
);

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },
    items: [cartItemSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.models.Cart || mongoose.model("Cart", cartSchema);
