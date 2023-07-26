const express = require("express");

const router = express.Router();

const upperDeckController = require("../controllers/deckController");

router.get("/get-upper-desks", upperDeckController.getUpperDeck);

router.get("/fetch-item-upper/:id", upperDeckController.findItemUpper);

module.exports = router;
