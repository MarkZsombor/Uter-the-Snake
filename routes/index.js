var express = require('express')
var router  = express.Router()

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


// Handle POST request to '/start'
router.post('/start', function (req, res) {
  // NOTE: Do something here to start the game

  // Response data
  var data = {
    color: '#FFD90F',
    name: 'Uter',
    head_type: 'safe',
    tail_type: 'round-bum',
    taunt: taunts[0],
  }

  return res.json(data)
})

// Need:
// Limit move choices to non-death choices
// Find closest food
// Move to food
// When close circle food if health is high
// Eat food if health is low

// Handle POST request to '/move'
router.post('/move', function (req, res) {
  // NOTE: Do something here to generate your move


  // Response data
  var data = {
    move: 'up', // one of: ['up','down','left','right']
    taunt: getTaunt()
  }

  return res.json(data)
})

module.exports = router
