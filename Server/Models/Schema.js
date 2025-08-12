const mongoose = require("mongoose");
const Vendor = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
},{timestamps:true});
const vendor_data = mongoose.model("vendor_data", Vendor);
module.exports = vendor_data;
