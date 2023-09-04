const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weeklySelectionSchema = new Schema({
  team: { type: String, required: true },
  result: { type: String, required: true }
})

const winlossHistorySchema = new Schema({
  user: { type: String },
  weeklySelections: { type: [weeklySelectionSchema] }
})

const groupSchema = new Schema({
  name: { type: String, required: true },
  invite_key: { type: String, required: true, unique: true },
  users: [{
    user: { type: String },
    stillPlaying: { type: Boolean, default: true }
  }],
  league: { type: String },
  history: { type: [winlossHistorySchema] }
})

module.exports = {
  Group: mongoose.model('Group', groupSchema),
  WinLoss: mongoose.model('WinLoss', winlossHistorySchema),
  WeeklySelection: mongoose.model('WeeklySelection', weeklySelectionSchema)
};