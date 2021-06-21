import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  firstName: { required: true, type: String, min: 1 },
  lastName: { required: true, type: String, min: 1 },
  email: { required: true, type: String },
  password: { required: true, type: String, min: 6 },
});

module.exports = mongoose.model("Users", userSchema);
