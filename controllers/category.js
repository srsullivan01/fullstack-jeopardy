const express = require("express");
const Category = require("../models/Category");
const Question = require("../models/Question");
const router = express.Router();

router.get("/", (req, res) => {
  Category.find().then((categories) => {
    res.json(categories);
  });
});

router.post("/", (req, res) => {
  const Category = new Category();
  newCategory.name = req.body.category.name;

  const newQuestions = req.body.category.questions.map((question) => {
    return new Question(question);
  });
  newCategory.questions = newQuestions;

  newCategory.save().then((category) => {
    res.json(category);
  }).catch(err => console.log(err));
})

module.exports = router;
