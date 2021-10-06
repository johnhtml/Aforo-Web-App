const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  userName: { type: String },
  password: { type: String },
  name: { type: String },
  lastName: { type: String },
  email: { type: String },
  phone: { type: String },
  documentType: { type: String },
  documentNumber: { type: String },
  acceptedPersonalTerms: { type: Boolean }
})

module.exports = mongoose.model('User', userSchema, 'Users');
