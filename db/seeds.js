require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Game = require('../models/Game');
var Category = require('../models/Category');
var Question = require('../models/Question');

// Use native promises
mongoose.Promise = global.Promise;

Game.remove({}, (err) => console.log(err));
Category.remove({}, (err) => console.log(err));
Question.remove({}, (err) => console.log(err));

const beibs = new Question({
  question: "He's the Canadian pop sensation being sensational here\"There's gonna be one less lonely girl...\"",
  answer: "Justin Bieber",
  value: 200
});
const jayz = new Question({
  question: 'This roc-a-fella introduced us to a "Hard Knock Life (Ghetto Anthem)"',
  answer:	"Jay-Z",
  value: 400
});
const amy = new Question({
  question:"\"You Sent Me Flying\", sang this British woman who died young in 2011.",
  answer: "Amy Winehouse",
  value: 600
})
const avril = new Question({
  question: "Ontario native seen hereback in high school. We hear she had a thingfor \"Sk8er Bois\"",
  answer:	"Avril Lavigne",
  value: 800
})
const zooey = new Question({
  question: "M. Ward & Zooey Deschanel, I now pronoun you this duo.",
  answer: "She & Him",
  value: 1000
})


const popMusic = new Category({
  name: "Pop Music",
  questions: [beibs, jayz, amy, avril, zooey]
})

const lando = new Question({
  question: "During the attack on the second Death Star, this was Lando's call sign at the helm of the Millennium Falcon.",
  answer: "Gold Leader",
  value: 200
})

const skyhopper = new Question({
  question: "This vehicle is the choice mode of transportation for those looking to bullseye womprats.",
  answer: "T-16 Skyhopper",
  value: 400
})

const tattoos = new Question({
  question: "The Zabrak, of which a red-faced sith is the most notable example, gain these marking as a rite of passage.",
  answer: "Facial tattoos",
  value: 600
})

const blaster = new Question({
  question: "Designed to protect from the elements and this; it appears that the designers of stormtrooper armor did less than adequate field testing.",
  answer: "Blaster fire",
  value: 800
})

const jabba = new Question({
  question: "The B'omarr monks \"inhabit\" this seedy locale.",
  answer: "Jabbas palace",
  value: 1000
})

const starWars = new Category({
  name: "Star Wars",
  questions: [lando, skyhopper, tattoos, blaster, jabba]
})

const drWho = new Question({
  question: "\"Torchwood\" is an anagram and spin-off of what popular British sci-fi series?",
  answer: "Dr Who",
  value: 200
})

const terabyte = new Question({
  question: "1,024 Gigabytes is equal to one what?",
  answer: "terabyte",
  value: 400
})

const venus = new Question({
  question: "In our solar system which two planets rotate clockwise?",
  answer: "Venus and Uranus",
  value: 600
})

const xfiles = new Question({
  question: "According to Clyde Bruckman, this X-Files character is immortal.",
  answer: "Scully",
  value: 800
})

const batman = new Question({
  question: "In the flashpoint alternate universe, this character becomes the Joker."
  answer: "Martha Wayne",
  value: 1000
})

const geekStuff = new Category({
  name: "Geeky Stuff",
  questions: [drWho, terabyte, venus, xfiles, batman]
})

const furby = new Question({
  question: "The domestication of this robot brought artificial intelligence into the home.",
  answer: "Furby",
  value: 200
})

const turing = new Question({
  question: "To pass this test, an AI must exhibit behavior equivilent to a human.",
  answer: "Turing Test",
  value: 400
})

const app = new Question({
  question: "In 2014 an app was released for the iphone that correctly diagnosed this disease.",
  answer: "Melanomas",
  value: 600
})

const miku = new Question({
  question: "This fictional musician plays live shows for thousands using holographic projections.",
  answer: "Hatsune Miku",
  value: 800
})

const musk = new Question({
  question: "This Forbes billion said artificial intelligence was the greatest threat to human existence.",
  answer: "Elon Musk",
  value: 1000
})

const artificialInt = new Category({
  name: "Artificial Intelligence",
  questions: [furby, turing, app, miku, musk]
})


const karaoke = new Question({
  question: "This Japanese word means \"empty orchestra\"",
  answer: "Karaoke",
  value: 200
})

const nagasaki = new QUestion({
  question: "The second atomic bomb ever used was dropped on this city.",
  answer: "Nagasaki",
  value: 400
})

const baseball = new Question({
  question: "Although sumo is the national sport of Japan, this is the most watched sport on Japanese TV.",
  answer: "Baseball",
  value: 600
})

const natto = new Question({
  question: "This sticky, soybean-based food is popular in Japan but rarely enjoyed by foreigners",
  answer: "Natto",
  value: 800
})

const cherry = new Question({
  question: "This Japanese word refers to eating and drinking under a cherry blossom tree.",
  answer: "Hanami",
  value: 1000
})

const japan = new Category({
  name: "Japan",
  questions: [karaoke, nagasaki, baseball, natto, cherry]
})

const game = new Game({
  user: "WDI11",
  points: 0,
  categories: [popMusic], [starWars], [geekStuff], [artificialInt], [japan]
})

japan.save().then(() => console.log("Japan saved!"));
artificialInt.save().then(() => console.log("AI saved!"));
starWars.save().then(() => console.log("Star wars saved!"));
geekStuff.save().then(() => console.log("Geek stuff saved!"));
popMusic.save().then(() => console.log("pop music Saved!"));
game.save().then(() => console.log("Game Saved!"))

mongoose.connection.close();
