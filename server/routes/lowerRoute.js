const express = require("express");

const router = express.Router();

const deckController = require("../controllers/deckController");

router.get("/get-lower-desks", deckController.getLowerDeck);

router.get("/fetch-item/:id", deckController.findItem);

module.exports = router;
