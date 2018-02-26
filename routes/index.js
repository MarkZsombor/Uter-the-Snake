const express = require('express')
const router  = express.Router()
const bodyParser = require('body-parser')
const app = express();
const PF = require('pathfinding');

app.use(bodyParser.json());

const taunts = [
  "Don't make me run, I'm full of Chocolate!",
  "I don't deserve this, I came here legally as an exchange student!",
  "Oh guten tag. Would you like a bite of my Vengelerstrasse bar?",
  "I also have a bag of marzipan JoyJoys!",
  "Would you like another lick of my flavor wax?",
  "I begged you to look at mine first!"
];

function getTaunt() {
  const tauntIndex = Math.floor(Math.random() * (taunts.length));
  return taunts[tauntIndex];
}

const snakeInfo = {
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
// Find closest food
// Move to food
// When close circle food if health is high
// Eat food if health is low

// Handle POST request to '/move'
router.post('/move', function (req, res) {
  // NOTE: Do something here to generate your move
  const gameState = req.body;
  const myHead = {
    x: gameState.you.body.data[0].x,
    y: gameState.you.body.data[0].y
  }

  const grid = new PF.Grid(gameState.width, gameState.height);

  function setGrid() {
    //Mark my snake in grid
    for (let i = 1; i < gameState.you.body.data.length; i++) {
      grid.setWalkableAt(gameState.you.body.data[i].x, gameState.you.body.data[i].y, false);
    }
    //Mark other snake heads
    const allSnakes = gameState.snakes.data
    for (let snake in allSnakes) {
      if (allSnakes[snake].id !== gameState.you.id) {
        //Don't run into body
        for (let j = 0; j < allSnakes[snake].body.data.length; j++) {
          grid.setWalkableAt(allSnakes[snake].body.data[j].x, allSnakes[snake].body.data[j].y, false);
        }
        //Decide on head collision depending on size
        if (gameState.you.length <= allSnakes[snake].length) {
          //Pathfinding will throw an error if we try to set a space outside the board
          if (allSnakes[snake].body.data[0].x + 1 < gameState.width) {
            grid.setWalkableAt((allSnakes[snake].body.data[0].x + 1), allSnakes[snake].body.data[0].y, false);
          }
          if (allSnakes[snake].body.data[0].x - 1 >= 0) {
            grid.setWalkableAt((allSnakes[snake].body.data[0].x - 1), allSnakes[snake].body.data[0].y, false);
          }
          if (allSnakes[snake].body.data[0].y + 1 < gameState.height) {
            grid.setWalkableAt(allSnakes[snake].body.data[0].x, (allSnakes[snake].body.data[0].y + 1), false);
          }
          if (allSnakes[snake].body.data[0].y - 1 >= 0) {
            grid.setWalkableAt(allSnakes[snake].body.data[0].x, (allSnakes[snake].body.data[0].y - 1), false);
          }
        }
      }
    }
  }

  setGrid();
  const closestFood = {
    x: 0,
    y: 9
  };
  const finder = new PF.AStarFinder;
  const path = finder.findPath(myHead.x, myHead.y, closestFood.x, closestFood.y, grid);
  
  function setMove() {
    if (path[1][0] === myHead.x && path[1][1] === myHead.y + 1) {
      return 'up';
    } else if (path[1][0] === myHead.x && path[1][1] === myHead.y - 1) {
      return 'down';
    } else if (path[1][0] === myHead.x + 1 && path[1][1] === myHead.y) {
      return 'right';
    } else if (path[1][0] === myHead.x - 1 && path[1][1] === myHead.y) {
      return 'left';
    } else {
      return 'up';
    }
  }
  // Response data
  const data = {
    move: setMove(),
    taunt: getTaunt()
  }

  return res.json(data)
})

module.exports = router
