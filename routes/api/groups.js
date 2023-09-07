const express = require('express');
const router = express.Router();
const groupsCTRL = require('../../controllers/api/groups');


router.post('/create-group', groupsCTRL.createGroup)

router.get('/get-groups', groupsCTRL.getGroups);

router.post('/join-group', groupsCTRL.joinGroup)


module.exports = router;