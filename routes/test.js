var PF = require('pathfinding');

var gameState = {
	"width": 13,
	"height": 19,
	"id": 7042,
	"turn": 3,
	"snakes": {
		"data": [
			{
				"id": "c3e89743-fbdd-465b-8208-45ea0919b05a",
				"health": 97,
				"length": 3,
				"taunt": "\"<(O.o)>\"",
				"name": "test",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 11,
							"y": 8
						},
						{
							"object": "point",
							"x": 11,
							"y": 9
						},
						{
							"object": "point",
							"x": 11,
							"y": 10
						}
					],
					"object": "list"
				}
			},
			{
				"id": "1d442390-4195-4f47-93ce-21a56b250f4b",
				"health": 99,
				"length": 4,
				"taunt": "\"Don't make me run, I'm full of Chocolate!\"",
				"name": "Uter",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 5,
							"y": 10
						},
						{
							"object": "point",
							"x": 4,
							"y": 10
						},
						{
							"object": "point",
							"x": 3,
							"y": 10
						},
						{
							"object": "point",
							"x": 3,
							"y": 11
						}
					],
					"object": "list"
				}
			},
			{
				"id": "64f03f9f-c332-4330-8a1e-8342c8d887c7",
				"health": 97,
				"length": 3,
				"taunt": "\"Boop the snoot!\"",
				"name": "LUL",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 5,
							"y": 18
						},
						{
							"object": "point",
							"x": 6,
							"y": 18
						},
						{
							"object": "point",
							"x": 7,
							"y": 18
						}
					],
					"object": "list"
				}
			},
			{
				"id": "b36c2a40-5ab0-48cf-b0a7-3cfc8e824324",
				"health": 100,
				"length": 5,
				"taunt": "\"The Sauce is loose!\"",
				"name": "MrSauce",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 6,
							"y": 11
						},
						{
							"object": "point",
							"x": 6,
							"y": 12
						},
						{
							"object": "point",
							"x": 5,
							"y": 12
						},
						{
							"object": "point",
							"x": 5,
							"y": 11
						},
						{
							"object": "point",
							"x": 5,
							"y": 11
						}
					],
					"object": "list"
				}
			},
			{
				"id": "0d3fba4d-7f01-460c-95e9-28cd154db839",
				"health": 97,
				"length": 3,
				"taunt": "\"tail\"",
				"name": "Training Snake 9",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 3,
							"y": 6
						},
						{
							"object": "point",
							"x": 4,
							"y": 6
						},
						{
							"object": "point",
							"x": 4,
							"y": 7
						}
					],
					"object": "list"
				}
			},
			{
				"id": "90bc6875-358f-4cfe-adff-03ed1f4f0f49",
				"health": 97,
				"length": 3,
				"taunt": "\"Bears, Beets, Battlestar Galactica\"",
				"name": "Dwight",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 9,
							"y": 4
						},
						{
							"object": "point",
							"x": 8,
							"y": 4
						},
						{
							"object": "point",
							"x": 8,
							"y": 3
						}
					],
					"object": "list"
				}
			},
			{
				"id": "4b5e6bb5-1c24-4458-b7cb-89e210d5b2d4",
				"health": 98,
				"length": 4,
				"taunt": "\"left\"",
				"name": "C4$H $NAK3",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 2,
							"y": 17
						},
						{
							"object": "point",
							"x": 3,
							"y": 17
						},
						{
							"object": "point",
							"x": 4,
							"y": 17
						},
						{
							"object": "point",
							"x": 4,
							"y": 18
						}
					],
					"object": "list"
				}
			}
		],
		"object": "list"
	},
	"food": {
		"data": [
			{
				"object": "point",
				"x": 1,
				"y": 5
			},
			{
				"object": "point",
				"x": 7,
				"y": 5
			},
			{
				"object": "point",
				"x": 9,
				"y": 12
			},
			{
				"object": "point",
				"x": 5,
				"y": 5
			},
			{
				"object": "point",
				"x": 0,
				"y": 17
			},
			{
				"object": "point",
				"x": 7,
				"y": 8
			},
			{
				"object": "point",
				"x": 11,
				"y": 5
			},
			{
				"object": "point",
				"x": 0,
				"y": 7
			},
			{
				"object": "point",
				"x": 0,
				"y": 13
			},
			{
				"object": "point",
				"x": 6,
				"y": 7
			},
			{
				"object": "point",
				"x": 1,
				"y": 17
			},
			{
				"object": "point",
				"x": 6,
				"y": 17
			},
			{
				"object": "point",
				"x": 10,
				"y": 2
			},
			{
				"object": "point",
				"x": 9,
				"y": 14
			},
			{
				"object": "point",
				"x": 8,
				"y": 10
			},
			{
				"object": "point",
				"x": 4,
				"y": 14
			},
			{
				"object": "point",
				"x": 9,
				"y": 16
			}
		],
		"object": "list"
	},
	"object": "world",
	"dead_snakes": {
		"data": [],
		"object": "list"
	},
	"you": {
		"id": "1d442390-4195-4f47-93ce-21a56b250f4b",
		"health": 99,
		"length": 4,
		"taunt": "\"Don't make me run, I'm full of Chocolate!\"",
		"name": "Uter",
		"object": "snake",
		"body": {
			"data": [
				{
					"object": "point",
					"x": 5,
					"y": 10
				},
				{
					"object": "point",
					"x": 4,
					"y": 10
				},
				{
					"object": "point",
					"x": 3,
					"y": 10
				},
				{
					"object": "point",
					"x": 3,
					"y": 11
				}
			],
			"object": "list"
		}
	}
}

const taunts = [
	"Don't make me run, I'm full of Chocolate!",
	"I don't deserve this!",
	"Oh guten tag.",
	"I also have a bag of marzipan JoyJoys!",
	"Would you like a lick of my flavor wax?",
	"I begged you to look at mine first!"
];

function getTaunt() {
  var tauntIndex = 0;
	if (gameState.you.health > 90){
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
}

const getDistance = (a,b) => (Math.abs(a - myHead.x) + Math.abs(b - myHead.y));


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
        for (var j = 0; j < allSnakes[snake].body.data.length - 1; j++) {
          grid.setWalkableAt(allSnakes[snake].body.data[j].x, allSnakes[snake].body.data[j].y, false);
				}
        //Could we run into the head this turn
				if (getDistance(allSnakes[snake].body.data[0].x, allSnakes[snake].body.data[0].y) == 2) { 
        
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
      allTargets.push({
        x: gameState.food.data[i].x,
        y: gameState.food.data[i].y,
        distance: getDistance(gameState.food.data[i].x, gameState.food.data[i].y)
      })
    }
    allTargets.sort(function (a, b) {
      return a.distance - b.distance;
    });
    // console.log(allTargets)
    return allTargets[0];
  }

  setGrid();
  const closestTarget = findTarget();
  const finder = new PF.AStarFinder;
  const path = finder.findPath(myHead.x, myHead.y, closestTarget.x, closestTarget.y, grid);
  const snakeResponse = {};

  // if (!path.length) {
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
          if (possibleMoves[move].x === allSnakes[snake].body.data[0].x+1 && possibleMoves[move].y === allSnakes[snake].body.data[0].y) {
            possibleMoves[move].valid = false;
          }
          if (possibleMoves[move].x === allSnakes[snake].body.data[0].x-1 && possibleMoves[move].y === allSnakes[snake].body.data[0].y) {
            possibleMoves[move].valid = false;
          }
          if (possibleMoves[move].x === allSnakes[snake].body.data[0].x && possibleMoves[move].y === allSnakes[snake].body.data[0].y+1) {
            possibleMoves[move].valid = false;
          }
          if (possibleMoves[move].x === allSnakes[snake].body.data[0].x && possibleMoves[move].y === allSnakes[snake].body.data[0].y-1) {
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
	console.log(validMoves);
    snakeResponse.move = validMoves[0].direction;
    snakeResponse.taunt = taunts[1];
    console.log(snakeResponse);
    // return res.json(snakeResponse);

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
	console.log(snakeResponse);
}