const User = require('../../models/user');
const Group = require('../../models/group')

const generateKey = require('generate-unique-id');


module.exports = {
  createGroup
};



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

    console.log(req.body);

    // Send a response with both the success message and the newGroup data
    res.json({ message: 'Group Created Successfully', group: newGroup });
  } catch (err) {
    console.log(err)
  }
}