const express = require("express");
const Game = require("../models/Game");
const Category = require("../models/Category");

const router = express.Router();

router.get("/", (req, res) => {
  Game.find().then((games) => {
    res.json(games);
  });
});

router.post("/", (req, res) => {
  const newGame = new Game();
  newGame.user = req.body.user;
  newGame.points = 0;
  newGame.categories = [];
  Category.find().then((categories) => {
    for (var i = 0; i < 6; i++){
      const randomNumber = Math.floor(Math.random() * categories.length);
      const randomCategory = categories[randomNumber];
      newGame.categories.push(randomCategory);
    }
    return newGame.save();
  }).then((game) => {
    return res.json(game);
  });
});

router.get("/:id", (req, res) => {
  Game.findById(req.params.id).then((game) => {
    res.json(game);
  })
})

router.put("/:id", (req, res) => {
  Game.findByIdAndUpdate(req.params.id, {points: req.body.points}).then((game) =>{
    res.json(game);
  })
});

module.exports = router;
