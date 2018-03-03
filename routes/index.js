const express = require('express')
const router  = express.Router()
const bodyParser = require('body-parser')
const app = express();
const PF = require('pathfinding');

app.use(bodyParser.json());

const taunts = [
  "Don't make me run, I'm full of Chocolate!",
  "I don't deserve this!", 
  "Oh guten tag.",
  "I also have a bag of marzipan JoyJoys!",
  "Would you like a lick of my flavor wax?",
  "I begged you to look at mine first!"
];

//Johnnie's contribution
router.post('/end', (req, res) => {
  return res.sendStatus(200);
});

router.post('/start', function (req, res) {
  const snakeInfo = {
    color: '#FFD90F',
    head_url: 'http://www.simpsonspark.com/images/persos/contributions/uter-22544.jpg',
    head_type: 'smile',
    tail_type: 'fat-rattle',
    taunt: taunts[0],
  }
  return res.json(snakeInfo);
});

router.post('/move', function (req, res) {
  const gameState = req.body;

  // Make Uter say funny things for hilarity
  function getTaunt() {
    var tauntIndex = 0;
    if (gameState.you.health > 95) {
      tauntIndex = 0;
    } else if (gameState.you.health < 30) {
      tauntIndex = 5;
    } else if (gameState.turn < 50) {
      tauntIndex = 4;
    } else if (gameState.turn < 100) {
      tauntIndex = 2;
    } else {
      tauntIndex = 3;
    }
    return taunts[tauntIndex];
  }

  const myHead = {
    x: gameState.you.body.data[0].x,
    y: gameState.you.body.data[0].y
  };

  //Determines the distance from the snakes head to something
  const getDistance = (a, b) => (Math.abs(a - myHead.x) + Math.abs(b - myHead.y));

  const grid = new PF.Grid(gameState.width, gameState.height);

  function setGrid() {
    //Mark my snake in grid
    for (var i = 1; i < gameState.you.body.data.length - 1; i++) {
      grid.setWalkableAt(gameState.you.body.data[i].x, gameState.you.body.data[i].y, false);
    }
    //Mark other snake heads
    const allSnakes = gameState.snakes.data
    for (var snake in allSnakes) {
      if (allSnakes[snake].id !== gameState.you.id) {
        //Don't run into body
        var snakeIndex = allSnakes[snake].body.data.length - 2;
        if (allSnakes[snake].body.data[snakeIndex + 1].x == allSnakes[snake].body.data[snakeIndex].x && allSnakes[snake].body.data[snakeIndex + 1].y == allSnakes[snake].body.data[snakeIndex].y) {
          snakeIndex++
        }
        for (var j = 0; j < snakeIndex; j++) {
          grid.setWalkableAt(allSnakes[snake].body.data[j].x, allSnakes[snake].body.data[j].y, false);
        }
        //Could we run into the head this turn
        if (getDistance(allSnakes[snake].body.data[0].x, allSnakes[snake].body.data[0].y) === 2) {

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
  }

  function findTarget() {
    // console.log(gameState.food.data);
    var allTargets = [];
    for (var i in gameState.food.data) {
      var distance = getDistance(gameState.food.data[i].x, gameState.food.data[i].y);
      if (!gameState.food.data[i].x || !gameState.food.data[i].y || gameState.food.data[i].x === gameState.width - 1 || gameState.food.data[i].y === gameState.height - 1) {
        distance += 10
      }
      // if (grid.nodes[gameState.food.data[i].x][gameState.food.data[i].y]) {
      //   if (!grid.nodes[gameState.food.data[i].x][gameState.food.data[i].y].walkable) {
      //     distance += 100
      //   }
      // }
      allTargets.push({
        x: gameState.food.data[i].x,
        y: gameState.food.data[i].y,
        distance: distance
      });

    }
    allTargets.sort(function (a, b) {
      return a.distance - b.distance;
    });
    return allTargets[0];
  }

  // Finds your own tail and returns its coordinates for targeting.
  function findTail() {
    let snakeBody = gameState.you;
    let snakeLength = gameState.you.length;
    let tailPosition = snakeBody.body.data[snakeLength - 1];
    return tailPosition;

  }

  // Checks current health to switch between tail chasing and food chasing.
  function chooseTarget() {

    // If health is over 75 chase tail
    if (gameState.you.health > 50){

      return findTail();
    } else {
      return findTarget();

    }

  }

  setGrid();
  const closestTarget = findTarget();
  const finder = new PF.AStarFinder;
  const path = finder.findPath(myHead.x, myHead.y, closestTarget.x, closestTarget.y, grid);
  const snakeResponse = {};

  if (!path.length || (path.length === 2 && !grid.nodes[path[0][1]][path[0][0]].walkable)) {
    // console.log('NO ROUTE')
    var possibleMoves = [
      {
        direction: "right",
        x: myHead.x + 1,
        y: myHead.y,
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
        direction: "up",
        x: myHead.x,
        y: myHead.y - 1,
        valid: true
      },
    ];

    // Stop the snake from running into itself
    function checkSelf() {
      for (var i = 0; i < gameState.you.body.data.length; i++) {
        for (var move in possibleMoves) {
          if (possibleMoves[move].x === gameState.you.body.data[i].x && possibleMoves[move].y === gameState.you.body.data[i].y) {
            possibleMoves[move].valid = false;
          }
        }
      }
    }

    //Stop from running into wall
    function checkEdges() {
      for (var move in possibleMoves) {
        // console.log('yup')
        if (possibleMoves[move].x < 0 || possibleMoves[move].x >= gameState.width) {
          possibleMoves[move].valid = false;
        }
        if (possibleMoves[move].y < 0 || possibleMoves[move].y >= gameState.height) {
          possibleMoves[move].valid = false;
        }
      }
    }

    //check for other snakes
    function checkSnakes() {
      var allSnakes = gameState.snakes.data
      for (var snake in allSnakes) {
        if (allSnakes[snake].id !== gameState.you.id) {
          // console.log('Found enemy')
          // console.log(allSnakes[snake]);
          //Don't run into body
          for (var i = 0; i < allSnakes[snake].body.data.length; i++) {
            for (var move in possibleMoves) {
              if (possibleMoves[move].x === allSnakes[snake].body.data[i].x && possibleMoves[move].y === allSnakes[snake].body.data[i].y) {
                possibleMoves[move].valid = false;
              }
            }
          }
          //Decide on head collision depending on size
          if (allSnakes[snake].length >= gameState.you.length) {
            for (var move in possibleMoves) {
              if (possibleMoves[move].x === allSnakes[snake].body.data[0].x + 1 && possibleMoves[move].y === allSnakes[snake].body.data[0].y) {
                possibleMoves[move].valid = false;
              }
              if (possibleMoves[move].x === allSnakes[snake].body.data[0].x - 1 && possibleMoves[move].y === allSnakes[snake].body.data[0].y) {
                possibleMoves[move].valid = false;
              }
              if (possibleMoves[move].x === allSnakes[snake].body.data[0].x && possibleMoves[move].y === allSnakes[snake].body.data[0].y + 1) {
                possibleMoves[move].valid = false;
              }
              if (possibleMoves[move].x === allSnakes[snake].body.data[0].x && possibleMoves[move].y === allSnakes[snake].body.data[0].y - 1) {
                possibleMoves[move].valid = false;
              }
            }
          }
        }
      }
    }

    checkSelf();
    checkEdges();
    checkSnakes();

    var validMoves = [];
    for (var i in possibleMoves) {
      if (possibleMoves[i].valid) {
        validMoves.push(possibleMoves[i]);
      }
    }

    snakeResponse.move = validMoves[0].direction;
    snakeResponse.taunt = taunts[1];
    console.log(snakeResponse);
    return res.json(snakeResponse);

  } else {
    function setMove() {
      if (path[1][0] === myHead.x && path[1][1] === myHead.y + 1) {
        return 'down'; 
      } else if (path[1][0] === myHead.x && path[1][1] === myHead.y - 1) {
        return 'up'; 
      } else if (path[1][0] === myHead.x + 1 && path[1][1] === myHead.y) {
        return 'right';
      } else if (path[1][0] === myHead.x - 1 && path[1][1] === myHead.y) {
        return 'left';
      } else {
        return 'up';
      }
    }

    snakeResponse.move = setMove();
    snakeResponse.taunt = getTaunt();
    // console.log(snakeResponse);
    return res.json(snakeResponse);

  }
})

module.exports = router
