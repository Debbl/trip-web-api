const express = require("express");
const cityAllData = require("../../data/city/all/index.json")


const cityRouter = express.Router();

cityRouter.get("/all", (req, res) => {
  res.json(cityAllData);
})


module.exports = cityRouter;