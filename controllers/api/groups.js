const Group = require('../../models/group')
const User = require('../../models/user')

const generateKey = require('generate-unique-id');


module.exports = {
  createGroup,
  getGroups
};


async function getGroups(req, res) {
  try {
    const user = await User.findById(req.user._id)
    const groups = user.groups
    res.json(groups)
  } catch (err) {
    console.log(err)
  }
}


async function createGroup(req, res) {
  try {
    const invKey = generateKey({
      length: 6,
      useLetters: true,
      useNumbers: true,
      excludeSymbols: [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
        '-', '_', '=', '+', '[', ']', '{', '}', '\\', '|',
        ';', ':', "'", '"', ',', '.', '<', '>', '/', '?',
        '`', '~', '`', '!', '@', '#', '$', '%', '^', '&',
        '*', '(', ')', '-', '_', '=', '+', '[', ']', '{',
        '}', '\\', '|', ';', ':', "'", '"', ',', '.', '<',
        '>', '/', '?'
      ]
    })

    // Create a new Group instance with the required properties
    const newGroup = new Group({
      name: req.body.name,
      league: req.body.league,
      users: [{ user: req.user._id }],
      invite_key: invKey
    });

    // Save the new group to the database
    await newGroup.save();

    //add new group to user model
    //TODO not sure if this works or not yet
    const user = await User.findById(req.user._id)
    user.groups.push(newGroup)
    await user.save();

    console.log(req.body);
    console.log(user.groups)
    // Send a response with both the success message and the newGroup data
    res.json({ message: 'Group Created Successfully', group: newGroup });
  } catch (err) {
    console.log(err)
  }
}