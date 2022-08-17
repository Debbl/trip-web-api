const express = require("express");
const homeRouter = require("./home/index.js")
const router = express.Router();

router.use('/home', homeRouter);

module.exports = router;
