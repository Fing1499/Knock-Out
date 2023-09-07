const express = require('express');
const router = express.Router();
const groupsCTRL = require('../../controllers/api/groups');


router.post('/create-group', groupsCTRL.createGroup)

router.get('/get-groups', groupsCTRL.getGroups);


module.exports = router;