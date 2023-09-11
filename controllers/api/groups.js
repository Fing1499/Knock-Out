const Group = require('../../models/group')
const User = require('../../models/user')

const generateKey = require('generate-unique-id');


module.exports = {
  createGroup,
  getGroups,
  joinGroup,
  makeSelection
};

async function makeSelection(req, res) {
  try {

    const user = await User.findById(req.user._id)
    const group = await Group.findOne({ invite_key: req.body.invite_key })
    const playerInfo = {
      user: user._id,
      team: req.body.team,
      result: req.body.result,
      fixture_id: req.body.id
    }
    console.log(req.body)

    const weeksPast = getWeeksPast(group.history[group.history.length - 1].date)
    
    if (group.history[group.history.length - 1].week !== weeksPast) {
      //!new history array item

      const history = {
        week: weeksPast,
        date: new Date(),
        player_info: playerInfo
      }

      group.history.push(history)
      console.log('IF')
    } else {
      //? push into exisiting historyb playerinfo
      console.log('ELSE')
      console.log(playerInfo, 'TWO')
      group.history[group.history.length - 1].player_info.push(playerInfo)
    }

    await group.save()
    res.json('group added')
  } catch (err) {
    console.log(err)
  }
}

//todo: make sure users cant join twice
async function joinGroup(req, res) {
  try {
    const user = await User.findById(req.user._id)
    const group = await Group.findOne({ invite_key: req.body.invite_key })
    if (group && !group.users.some(u => u.user === req.user._id)) {
      user.groups.push(group._id);
      group.users.push({ user: req.user._id });
      await group.save()
      await user.save()
      res.json(true)
    } else if (!group) {
      res.json(false)
    } else if (group.users.some(u => u.user === req.user._id)) {
      res.json(false)
    }
  } catch (err) {
    console.log(err)
  }
}

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
      invite_key: invKey,
      users: [{ user: req.user._id }],
      league: req.body.league,
      history: [{
        week: 1,
        date: new Date(),
        player_info: [{

        }]
      }]
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


//! ============ HELPER FUNCTIONS ==================== !//

function getWeeksPast(previousDate) {

  const currentDate = new Date();
  
  const timeDifference = currentDate - previousDate;
  
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  
  return Math.floor(daysDifference / 7);
}
