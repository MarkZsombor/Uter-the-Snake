var express = require('express')
var router  = express.Router()
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());

var taunts = [
  "Don't make me run, I'm full of Chocolate!",
  "I don't deserve this, I came here legally as an exchange student!",
  "Oh guten tag. Would you like a bite of my Vengelerstrasse bar?",
  "I also have a bag of marzipan JoyJoys!",
  "Would you like another lick of my flavor wax?",
  "I begged you to look at mine first!"
];

function getTaunt() {
  var tauntIndex = Math.floor(Math.random() * (taunts.length));
  return taunts[tauntIndex];
}

var snakeInfo = {
  color: '#FFD90F',
  name: 'Uter',
  head_url: 'http://www.simpsonspark.com/images/persos/contributions/uter-22544.jpg',
  head_type: 'safe',
  tail_type: 'round-bum',
  taunt: taunts[0],
}

// Handle POST request to '/start'
router.post('/start', function (req, res) {
  // NOTE: Do something here to start the game

  return res.json(snakeInfo);
})

// Need:
// Limit move choices to non-death choices
//  -Fill board with danger spots, including could be occupied areas
//  -Prioretize potential killing head on collisions?
// Find closest food
// Move to food
// When close circle food if health is high
// Eat food if health is low

// Handle POST request to '/move'
router.post('/move', function (req, res) {
  // NOTE: Do something here to generate your move
  var gameState = req.body;
  var myHead = {
    x: gameState.you.body.data[0].x,
    y: gameState.you.body.data[0].y
  }

  var possibleMoves = [
    {
      direction: "up",
      x: myHead.x,
      y: myHead.y - 1,
      valid: true
    },
    {
      direction: "down",
      x: myHead.x,
      y: myHead.y + 1,
      valid: true
    },
    {
      direction: "left",
      x: myHead.x - 1,
      y: myHead.y,
      valid: true
    },
    {
      direction: "right",
      x: myHead.x + 1,
      y: myHead.y,
      valid: true
    },
  ]

  // Stop the snake from running into itself
  function checkSelf() {
    for (var i = 0; i < mySnekBody.length; i++) {
      for (var move in possibleMoves) {
        if (possibleMoves[move].x === mySnekBody[i].x && possibleMoves[move].y === mySnekBody[i].y) {
          possibleMoves[move].valid = false;
        }
      }
    }
  }

  //Stop from running into wall
  //Stop from running into other snakes
  //Allow for charging smaller snakes

  // Response data
  var data = {
    move: 'up', // one of: ['up','down','left','right']
    taunt: getTaunt()
  }

  return res.json(data)
})

module.exports = router
