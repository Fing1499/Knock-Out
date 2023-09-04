const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  followed_teams: { type: Array },
  followed_leagues: { type: Array },
  followed_users: { type: Array },
  groups: { type: Array },
  picture: { type: String }
})




module.exports = mongoose.model('Profile', profileSchema);