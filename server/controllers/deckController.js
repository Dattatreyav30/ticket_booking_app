const LowerDeck = require("../Models/lowerDeck");
const UpperDeck = require("../Models/upperDeck");

exports.getLowerDeck = async (req, res, next) => {
  try {
    const data = await LowerDeck.findAll();
    res.status(200).json({ message: "data fetched succesfully", lists: data });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
};

exports.getUpperDeck = async (req, res, next) => {
  try {
    const data = await UpperDeck.findAll();
    res.status(200).json({ message: "data fetched succesfully", lists: data });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
};

exports.findItem = async (req, res) => {
  try {
    const item = await LowerDeck.findByPk(req.params.id);
    res.status(200).json({ message: "succesfull", item: item });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
};

exports.findItemUpper = async (req, res) => {
  try {
    const item = await UpperDeck.findByPk(req.params.id);
    res.status(200).json({ message: "succesfull", item: item });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
};
