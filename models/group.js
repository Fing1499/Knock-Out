const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: { type: String, required: true },
  invite_key: { type: String },
  users: { type: Array }
})




module.exports = mongoose.model('Group', groupSchema);