const mongoose = require("mongoose");
// Event Schema
const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true,default: Date.now },
    location: { type: String, required: true },
    image: { type: String }, // optional image URL
  },
  { timestamps: true }
);
const eventData = mongoose.model("Event", eventSchema);
module.exports = eventData;
