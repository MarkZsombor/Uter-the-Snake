var express = require('express')
var router  = express.Router()

// Handle POST request to '/start'
router.post('/start', function (req, res) {
  // NOTE: Do something here to start the game

  // Response data
  var data = {
    color: '#FFD90F',
    name: 'Uter',
    head_type: 'safe',
    tail_type: 'round-bum',
    taunt: "Don't make me run, I'm full of Chocolate!",
  }

  return res.json(data)
})

// Handle POST request to '/move'
router.post('/move', function (req, res) {
  // NOTE: Do something here to generate your move

  // Response data
  var data = {
    move: 'up', // one of: ['up','down','left','right']
    taunt: "I don't deserve this, I came here legally as an exchange student!", // optional, but encouraged!
  }

  var taunts = [
    "Don't make me run, I'm full of Chocolate!",
    "I don't deserve this, I came here legally as an exchange student!",
    "Oh guten tag. Would you like a bite of my Vengelerstrasse bar?",
    "I also have a bag of marzipan JoyJoys!",
    "Would you like another lick of my flavor wax?",
    "I begged you to look at mine first!"
  ];

  return res.json(data)
})

module.exports = router
