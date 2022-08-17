const express = require("express");
const hotSuggestsData = require("../../data/home/hotSuggests/index.json");
const categoriesData = require("../../data/home/categories/index.json");
const houseListPage1Data = require("../../data/home/houselist/page1/index.json");
const houseListPage2Data = require("../../data/home/houselist/page2/index.json");
const houseListPage3Data = require("../../data/home/houselist/page3/index.json");


const homeRouter = express.Router();

homeRouter.get("/hotSuggests", (req, res) => {
  res.json(hotSuggestsData);
});

homeRouter.get("/categories", (req, res) => {
  res.json(categoriesData);
});

homeRouter.get("/houselist", (req, res) => {
  // console.log(req.query);
  const { page } = req.query;
  let json = {}
  switch(page) {
    case '1':
      json = houseListPage1Data
      break;
    case '2':
      json = houseListPage2Data
      break;
    case '3':
      json = houseListPage3Data
      break;
    default:
      json = {}
  }
  res.json(json)
});



module.exports = homeRouter;
