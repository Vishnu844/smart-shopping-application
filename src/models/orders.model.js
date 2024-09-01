const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: {
    type: Array,
  },
  address: { type: String },
  phone: { type: String },
  paymentId: { type: String, required: true },
  paymentStatus: { type: String, required: true },
  totalAmount: { type: Number, required: true }, // Stored in cents
  currency: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, // Auto-set the created date
});

module.exports = mongoose.models.Order || mongoose.model("Order", orderSchema);
