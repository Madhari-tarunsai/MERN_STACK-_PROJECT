const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const adminData=mongoose.model("Admin", AdminSchema);

module.exports = adminData
