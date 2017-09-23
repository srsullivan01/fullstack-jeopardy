const mongoose = require('mongoose');

const QuestionSchema= mongoose.Schema({
  value: Number,
  question: String,
  answer: String,
});

const CategorySchema= mongoose.Schema({
  name: String,
  questions: [QuestionSchema],
});

const GameSchema = mongoose.Schema({
  user: String,
  points: Number,
  board: [Boolean],
  categories: [CategorySchema]
});
GameSchema.pre('save', function(next){
  const emptyBoard = [
    false, false, false, false, false, false,
    false, false, false, false, false, false,
    false, false, false, false, false, false,
    false, false, false, false, false, false,
    false, false, false, false, false, false,
  ];
  this.board = emptyBoard;
  next();
})

const Game = mongoose.model("Game", GameSchema);
const Category = mongoose.model("Category", CategorySchema);
const Question = mongoose.model("Question", QuestionSchema);

module.exports = {
  Question, Category, Game
};
