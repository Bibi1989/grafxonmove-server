const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name fields is required"],
    },
    email: {
      type: String,
      require: [true, "Email fields is required"],
    },
    phone: {
      type: String,
      require: [true, "Phone fields is required"],
    },
    company: {
      type: String,
      require: [true, "Company fields is required"],
    },
    message: {
      type: String,
      require: [true, "Message fields is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contact", ContactSchema)
