const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const groupSchema = new Schema({
  name: { type: String, required: true },
  invite_key: { type: String, required: true },
  users: [{
    user: { type: String },
    stillPlaying: { type: Boolean, default: true }
  }],
  league: { type: String },
  history: [{
    week: { type: Number, default: 0 },
    date: { type: Date },
    player_info: [{
      user: { type: String },
      team: { type: String },
      result: { type: String },
      fixture_id: { type: String }
    }]
  }]
})

module.exports = mongoose.model('Group', groupSchema);
