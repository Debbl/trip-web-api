const express = require("express");
const homeRouter = express.Router();
const hotSuggestsData = require("../../data/home/hotSuggests/index.json")


homeRouter.get('/hotSuggests', (req, res) => {
  res.json(hotSuggestsData)
})

module.exports = homeRouter;