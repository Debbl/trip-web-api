const express = require("express");
const homeRouter = require("./home/index.js");
const cityRouter = require("./city/index.js");
const detailRouter = require("./detail/index.js");

const router = express.Router();

router.use("/home", homeRouter);
router.use("/city", cityRouter);
router.use("/detail", detailRouter);

module.exports = router;
