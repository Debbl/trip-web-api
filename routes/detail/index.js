const express = require("express");
const DetailData1 = require("../../data/detail/infos/18298295/index");
const DetailData2 = require("../../data/detail/infos/51953704/index");
const DetailData3 = require("../../data/detail/infos/44173741/index");

const detailRouter = express.Router();

detailRouter.get("/infos", (req, res) => {
  const { houseId } = req.query;
  let json = {};
  switch (houseId) {
    case "18298295":
      json = DetailData1;
      break;
    case "51953704":
      json = DetailData2;
      break;
    case "44173741":
      json = DetailData3;
      break;
    default:
      json = {};
  }
  res.json(json);
});

module.exports = detailRouter;
