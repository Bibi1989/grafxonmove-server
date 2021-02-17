const mongoose = require("mongoose");

const SubscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email fields is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("subscriber", SubscriberSchema)
