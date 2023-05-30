const mongoose = require("mongoose");
const { Schema } = mongoose;

const billSchema = new Schema({
  status: {
    type: String,
    required: true,
    default: "due",
  },
  customer: {
    type: Object,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
});

mongoose.models = {};
module.exports = mongoose.models.bills || mongoose.model("bills", billSchema);
