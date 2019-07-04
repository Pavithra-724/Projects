const express = require("express");
const router = express.Router();

// const countController = require('../controllers/countController');
const content = require('../rwfiles/contentRead');
//Handle route
router.get("/wordcount", content.wordcount);


module.exports = router;
