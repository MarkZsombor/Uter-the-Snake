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
  function getTaunt(gs) {
    var tauntIndex = 0;
    if (gs.you.health > 90) {
      tauntIndex = 0;
    } else if (gs.you.health < 30) {
      tauntIndex = 5;
    } else if (gs.turn < 100) {
      tauntIndex = 4;
    } else if (gs.turn < 150) {
      tauntIndex = 2;
    } else {
      tauntIndex = 3;
    }
    return tauntIndex;
  }

  const myHead = {
    x: gameState.you.body.data[0].x,
    y: gameState.you.body.data[0].y
  };

  //Determines the distance from the snakes head to something
  const getDistance = (a, b, head) => (Math.abs(a - head.x) + Math.abs(b - head.y));

  //Create an empty board
  const grid = new PF.Grid(gameState.width, gameState.height);

  //Marks areas on the Grid where the snake can't pass into
  function setGrid(gs, grid) {
    //Mark my snake in grid
    for (var i = 1; i < gs.you.body.data.length - 1; i++) {
      grid.setWalkableAt(gs.you.body.data[i].x, gs.you.body.data[i].y, false);
    }
    //Mark other snake heads
    var allSnakes = gs.snakes.data
    for (var snake in allSnakes) {
      if (allSnakes[snake].id !== gs.you.id) {
        //Don't run into body

        // Account for other snakes length depending on whether they had eaten in the last turn
        // NOT WORKING
        // var snakeIndex = allSnakes[snake].body.data.length - 2;
        // if (allSnakes[snake].body.data[snakeIndex + 1].x == allSnakes[snake].body.data[snakeIndex].x && allSnakes[snake].body.data[snakeIndex + 1].y == allSnakes[snake].body.data[snakeIndex].y) {
        //   snakeIndex++
        // }
        for (var j = 0; j < allSnakes[snake].body.data.length - 1; j++) {
          grid.setWalkableAt(allSnakes[snake].body.data[j].x, allSnakes[snake].body.data[j].y, false);
        }
        //Could we run into the head this turn
        if (getDistance(allSnakes[snake].body.data[0].x, allSnakes[snake].body.data[0].y, myHead) === 2) {

          //Decide on head collision depending on size
          if (gs.you.length <= allSnakes[snake].length) {
            //Pathfinding will throw an error if we try to set a space outside the board
            if (allSnakes[snake].body.data[0].x + 1 < gs.width) {
              grid.setWalkableAt((allSnakes[snake].body.data[0].x + 1), allSnakes[snake].body.data[0].y, false);
            }
            if (allSnakes[snake].body.data[0].x - 1 >= 0) {
              grid.setWalkableAt((allSnakes[snake].body.data[0].x - 1), allSnakes[snake].body.data[0].y, false);
            }
            if (allSnakes[snake].body.data[0].y + 1 < gs.height) {
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

  //return the closest food item
  function findFood(gs) {
    var allTargets = [];
    for (var i in gs.food.data) {
      var distance = getDistance(gs.food.data[i].x, gs.food.data[i].y, myHead);
      //Add a weight that reduces the likelihood of targeting wall food
      if (!gs.food.data[i].x || !gs.food.data[i].y || gs.food.data[i].x === gs.width - 1 || gs.food.data[i].y === gs.height - 1) {
        distance += 10;
      }
      // Add a weight for food that can be eaten by bigger snakes
      // if (grid.nodes[gs.food.data[i].y][gs.food.data[i].x]) {
      //   if (!grid.nodes[gs.food.data[i].y][gs.food.data[i].x].walkable) {
      //     distance += 100
      //   }
      // }
      allTargets.push({
        x: gs.food.data[i].x,
        y: gs.food.data[i].y,
        distance: distance
      });

    }
    //Sort by weighted distance
    allTargets.sort(function (a, b) {
      return a.distance - b.distance;
    });
    //Return the closest
    return allTargets[0];
  }

  // Finds your own tail and returns its coordinates for targeting.
  function findTail(gs) {
    let snakeBody = gs.you;
    let snakeLength = gs.you.length;
    if(snakeLength === 1) {
      return findFood(gs);
    }
    let tailPosition = snakeBody.body.data[snakeLength - 1];
    return tailPosition;

  }


  //Determine the longest snake
  function getLongestLength(gs) {
    var allSnakes = gs.snakes.data
    var longestSnake = 0;
    for (var snake in allSnakes) {
      if (allSnakes[snake].id !== gs.you.id) {
        if (allSnakes[snake].length > longestSnake) {
          longestSnake = allSnakes[snake].length;
        }
      }
    }
    return longestSnake;
  }

  // Checks current health to switch between tail chasing and food chasing.
  function chooseTarget(gs) {
    // Toggle to keep you as the longest snake
    // if (gs.you.length < getLongestLength()){
    //     return findFood();
    // } else 
    if (gs.snakes.data.length == 2) {
        if (gs.you.health > 40) {
            return findTail();
        } else {
            return findFood(gs);
        }
    } else {
        return findFood(gs);
    }
  }

  // Set the board, choose the target and generate a path
  setGrid(gameState, grid);
  const closestTarget = chooseTarget(gameState);
  const finder = new PF.AStarFinder;
  const path = finder.findPath(myHead.x, myHead.y, closestTarget.x, closestTarget.y, grid);
  const snakeResponse = {};

  // if no path exists or a bigger snake can move into the same space choose a safe direction
  if (!path.length || (path.length === 2 && !grid.nodes[path[0][1]][path[0][0]].walkable)) {
    // console.log('NO PATH')
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
    function checkSelf(gs, pm) {
      for (var i = 0; i < gs.you.body.data.length-1; i++) {
        for (var move in pm) {
          if (pm[move].x === gs.you.body.data[i].x && pm[move].y === gs.you.body.data[i].y) {
            pm[move].valid = false;
          }
        }
      }
    }

    //Stop from running into wall
    function checkEdges(gs, pm) {
      for (var move in pm) {
        if (pm[move].x < 0 || pm[move].x >= gs.width) {
          pm[move].valid = false;
        }
        if (pm[move].y < 0 || pm[move].y >= gs.height) {
          pm[move].valid = false;
        }
      }
    }

    //check for other snakes
    function checkSnakes(gs, pm) {
      var allSnakes = gs.snakes.data
      for (var snake in allSnakes) {
        if (allSnakes[snake].id !== gs.you.id) {
          //Don't run into body
          for (var i = 0; i < allSnakes[snake].body.data.length-1; i++) {
            for (var move in pm) {
              if (pm[move].x === allSnakes[snake].body.data[i].x && pm[move].y === allSnakes[snake].body.data[i].y) {
                pm[move].valid = false;
              }
            }
          }
          //Decide on head collision depending on size
          if (allSnakes[snake].length >= gs.you.length) {
            for (var move in pm) {
              if (pm[move].x === allSnakes[snake].body.data[0].x + 1 && pm[move].y === allSnakes[snake].body.data[0].y) {
                pm[move].valid = false;
              }
              if (pm[move].x === allSnakes[snake].body.data[0].x - 1 && pm[move].y === allSnakes[snake].body.data[0].y) {
                pm[move].valid = false;
              }
              if (pm[move].x === allSnakes[snake].body.data[0].x && pm[move].y === allSnakes[snake].body.data[0].y + 1) {
                pm[move].valid = false;
              }
              if (pm[move].x === allSnakes[snake].body.data[0].x && pm[move].y === allSnakes[snake].body.data[0].y - 1) {
                pm[move].valid = false;
              }
            }
          }
        }
      }
    }

    checkSelf(gameState, possibleMoves);
    checkEdges(gameState, possibleMoves);
    checkSnakes(gameState, possibleMoves);

    var validMoves = [];
    for (var i in possibleMoves) {
      if (possibleMoves[i].valid) {
        validMoves.push(possibleMoves[i]);
      }
    }

    // if no spaces are safe, this will allow to move into spaces bigger snakes can allow move into
    if (!validMoves.length) {
      // console.log('NO PATH, NO OPEN MOVES');

      //Reset possibleMoves
      for (var i in possibleMoves) {
        possibleMoves[i].valid = true
      }
      
      //Recheck possibleMoves but ignoring larger snakes
      gameState.you.length += 100;
      checkSelf(gameState, possibleMoves);
      checkEdges(gameState, possibleMoves);
      checkSnakes(gameState, possibleMoves);
      for (var i in possibleMoves) {
        if (possibleMoves[i].valid) {
          validMoves.push(possibleMoves[i]);
        }
      }
    }

    snakeResponse.move = validMoves[0].direction;
    snakeResponse.taunt = taunts[1];
    return res.json(snakeResponse);

  } else {
    function setMove(path, head) {
      if (path[1][0] === head.x && path[1][1] === head.y + 1) {
        return 'down';
      } else if (path[1][0] === head.x && path[1][1] === head.y - 1) {
        return 'up';
      } else if (path[1][0] === head.x + 1 && path[1][1] === head.y) {
        return 'right';
      } else if (path[1][0] === head.x - 1 && path[1][1] === head.y) {
        return 'left';
      } else {
        return 'up';
      }
    }

    snakeResponse.move = setMove(path, myHead);
    snakeResponse.taunt = taunts[getTaunt(gameState)];
    return res.json(snakeResponse);

  }
})

module.exports = router
