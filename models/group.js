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
    player_info: [{
      user: { type: String, required: true },
      team: { type: String, required: true },
      result: { type: String, required: true },
      fixture_id: { type: String, required: true }
    }]
  }]
})

module.exports = mongoose.model('Group', groupSchema);
