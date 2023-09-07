const express = require('express');
const router = express.Router();
const footballCTRL = require('../../controllers/api/football');

router.get('/get-fixtures', footballCTRL.getFixtures);


module.exports = router;