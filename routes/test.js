var PF = require('pathfinding');

var gameState = {
	"width": 21,
	"height": 23,
	"id": 289,
	"turn": 10,
	"snakes": {
		"data": [
			{
				"id": "64f03f9f-c332-4330-8a1e-8342c8d887c7",
				"health": 91,
				"length": 4,
				"taunt": "\"Boop the snoot!\"",
				"name": "LUL",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 18,
							"y": 5
						},
						{
							"object": "point",
							"x": 17,
							"y": 5
						},
						{
							"object": "point",
							"x": 17,
							"y": 4
						},
						{
							"object": "point",
							"x": 18,
							"y": 4
						}
					],
					"object": "list"
				}
			},
			{
				"id": "1ee1141d-7194-44a0-b6dd-0f351894bc4e",
				"health": 90,
				"length": 3,
				"taunt": "\"Bears, Beets, Battlestar Galactica\"",
				"name": "Dwight",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 6,
							"y": 7
						},
						{
							"object": "point",
							"x": 6,
							"y": 6
						},
						{
							"object": "point",
							"x": 5,
							"y": 6
						}
					],
					"object": "list"
				}
			},
			{
				"id": "e0323921-3386-4883-b531-e8ad277b370e",
				"health": 97,
				"length": 4,
				"taunt": "\"python!\"",
				"name": "ds",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 16,
							"y": 17
						},
						{
							"object": "point",
							"x": 16,
							"y": 16
						},
						{
							"object": "point",
							"x": 16,
							"y": 15
						},
						{
							"object": "point",
							"x": 16,
							"y": 14
						}
					],
					"object": "list"
				}
			},
			{
				"id": "e3e768eb-9f1e-485e-b406-a325e3e162d7",
				"health": 90,
				"length": 3,
				"taunt": "\"battlesnake-go!\"",
				"name": "Snake Charmer",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 0,
							"y": 3
						},
						{
							"object": "point",
							"x": 0,
							"y": 4
						},
						{
							"object": "point",
							"x": 1,
							"y": 4
						}
					],
					"object": "list"
				}
			},
			{
				"id": "1d442390-4195-4f47-93ce-21a56b250f4b",
				"health": 98,
				"length": 4,
				"taunt": "\"Don't make me run, I'm full of Chocolate!\"",
				"name": "Uter",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 20,
							"y": 1
						},
						{
							"object": "point",
							"x": 19,
							"y": 1
						},
						{
							"object": "point",
							"x": 18,
							"y": 1
						},
						{
							"object": "point",
							"x": 17,
							"y": 1
						}
					],
					"object": "list"
				}
			},
			{
				"id": "c3e89743-fbdd-465b-8208-45ea0919b05a",
				"health": 90,
				"length": 3,
				"taunt": "\"<(O.o)>\"",
				"name": "test",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 15,
							"y": 22
						},
						{
							"object": "point",
							"x": 16,
							"y": 22
						},
						{
							"object": "point",
							"x": 17,
							"y": 22
						}
					],
					"object": "list"
				}
			},
			{
				"id": "69c37835-e672-4b8a-9327-47cd204e8411",
				"health": 90,
				"length": 3,
				"taunt": "\"eskettit!\"",
				"name": "UVSD Snake Rev 6",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 16,
							"y": 9
						},
						{
							"object": "point",
							"x": 16,
							"y": 10
						},
						{
							"object": "point",
							"x": 17,
							"y": 10
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
				"x": 18,
				"y": 17
			},
			{
				"object": "point",
				"x": 10,
				"y": 21
			},
			{
				"object": "point",
				"x": 5,
				"y": 11
			},
			{
				"object": "point",
				"x": 20,
				"y": 20
			},
			{
				"object": "point",
				"x": 20,
				"y": 18
			},
			{
				"object": "point",
				"x": 0,
				"y": 1
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
		"health": 98,
		"length": 4,
		"taunt": "\"Don't make me run, I'm full of Chocolate!\"",
		"name": "Uter",
		"object": "snake",
		"body": {
			"data": [
				{
					"object": "point",
					"x": 20,
					"y": 1
				},
				{
					"object": "point",
					"x": 19,
					"y": 1
				},
				{
					"object": "point",
					"x": 18,
					"y": 1
				},
				{
					"object": "point",
					"x": 17,
					"y": 1
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

const myHead = {
	x: gameState.you.body.data[0].x,
	y: gameState.you.body.data[0].y
}

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
			for (var j = 0; j < allSnakes[snake].body.data.length; j++) {
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

function findTarget() {
	// console.log(gameState.food.data);
	var allTargets = [];
	for (var i in gameState.food.data) {
		var distance = Math.abs(gameState.food.data[i].x - myHead.x) + Math.abs(gameState.food.data[i].y - myHead.y);
		// console.log('distance', distance);
		allTargets.push({
			x: gameState.food.data[i].x,
			y: gameState.food.data[i].y,
			distance: distance
		})
	}
	allTargets.sort(function (a, b) {
		return a.distance - b.distance;
	});
	return allTargets[0];
}

setGrid();
const closestTarget = findTarget();
const finder = new PF.AStarFinder;
const path = finder.findPath(myHead.x, myHead.y, closestTarget.x, closestTarget.y, grid);
// console.log('the path', path, path.length);

const snakeResponse = [];
if(!path.length) {
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
  var validMoves = [];
  for (var i in possibleMoves) {
    possibleMoves[i].valid = grid.nodes[possibleMoves[i].y][possibleMoves[i].x].walkable;
    if (possibleMoves[i].valid) { 
      validMoves.push(possibleMoves[i]);
    }
	}
	console.log(validMoves)
  function getPlanB() {
    const moveIndex = Math.floor(Math.random() * (validMoves.length));
    return validMoves[moveIndex].direction;
  }

	snakeResponse.move = getPlanB();
	snakeResponse.taunt= taunts[5];
  console.log('plan b\n')

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
snakeResponse.taunt = taunts[3];
console.log('plan a\n')
}

console.log(snakeResponse)

// console.log("my snak head? \n", myHead);
// console.log('snek', gameState.you);
var mySnekBody = gameState.you.body.data;

// console.log(mySnekBody);

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
		if (possibleMoves[move].x < 0 || possibleMoves[move].x > gameState.width) {
			possibleMoves[move].valid = false;
		}
		if (possibleMoves[move].y < 0 || possibleMoves[move].y > gameState.height) {
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
		}
	}
}
// console.log(possibleMoves)