var PF = require('pathfinding');

var gameState = {
	"width": 14,
	"height": 16,
	"id": 3906,
	"turn": 35,
	"snakes": {
		"data": [
			{
				"id": "e0323921-3386-4883-b531-e8ad277b370e",
				"health": 74,
				"length": 4,
				"taunt": "\"python!\"",
				"name": "ds",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 10,
							"y": 4
						},
						{
							"object": "point",
							"x": 10,
							"y": 5
						},
						{
							"object": "point",
							"x": 10,
							"y": 6
						},
						{
							"object": "point",
							"x": 10,
							"y": 7
						}
					],
					"object": "list"
				}
			},
			{
				"id": "38747a0d-388d-43cc-a2e4-938f0c8ccb53",
				"health": 99,
				"length": 6,
				"taunt": "\"Don't make me run, I'm full of Chocolate!\"",
				"name": "Uter",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 9,
							"y": 1
						},
						{
							"object": "point",
							"x": 10,
							"y": 1
						},
						{
							"object": "point",
							"x": 11,
							"y": 1
						},
						{
							"object": "point",
							"x": 12,
							"y": 1
						},
						{
							"object": "point",
							"x": 13,
							"y": 1
						},
						{
							"object": "point",
							"x": 13,
							"y": 2
						}
					],
					"object": "list"
				}
			},
			{
				"id": "b9607442-b09e-4f58-b9dc-91a72843ccd3",
				"health": 89,
				"length": 4,
				"taunt": "\"Whew\"",
				"name": "ok",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 4,
							"y": 4
						},
						{
							"object": "point",
							"x": 5,
							"y": 4
						},
						{
							"object": "point",
							"x": 5,
							"y": 5
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
				"id": "c9c927a5-eb70-401c-a07a-af239b49b5aa",
				"health": 65,
				"length": 3,
				"taunt": "\"yo im a snake\"",
				"name": "DANGER NOODLE STRATEGIC",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 9,
							"y": 3
						},
						{
							"object": "point",
							"x": 9,
							"y": 2
						},
						{
							"object": "point",
							"x": 10,
							"y": 2
						}
					],
					"object": "list"
				}
			},
			{
				"id": "d9979736-9e2e-4419-b156-e2f808bbf7c3",
				"health": 96,
				"length": 5,
				"taunt": "\"right\"",
				"name": "whelp aggro",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 3,
							"y": 11
						},
						{
							"object": "point",
							"x": 2,
							"y": 11
						},
						{
							"object": "point",
							"x": 2,
							"y": 12
						},
						{
							"object": "point",
							"x": 3,
							"y": 12
						},
						{
							"object": "point",
							"x": 3,
							"y": 13
						}
					],
					"object": "list"
				}
			},
			{
				"id": "744a925e-7a45-426b-ad71-e10a5d88fc77",
				"health": 65,
				"length": 3,
				"taunt": "\"tail\"",
				"name": "Training Snake 8",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 4,
							"y": 8
						},
						{
							"object": "point",
							"x": 5,
							"y": 8
						},
						{
							"object": "point",
							"x": 5,
							"y": 9
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
				"x": 3,
				"y": 7
			},
			{
				"object": "point",
				"x": 13,
				"y": 7
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
		"id": "38747a0d-388d-43cc-a2e4-938f0c8ccb53",
		"health": 99,
		"length": 6,
		"taunt": "\"Don't make me run, I'm full of Chocolate!\"",
		"name": "Uter",
		"object": "snake",
		"body": {
			"data": [
				{
					"object": "point",
					"x": 9,
					"y": 1
				},
				{
					"object": "point",
					"x": 10,
					"y": 1
				},
				{
					"object": "point",
					"x": 11,
					"y": 1
				},
				{
					"object": "point",
					"x": 12,
					"y": 1
				},
				{
					"object": "point",
					"x": 13,
					"y": 1
				},
				{
					"object": "point",
					"x": 13,
					"y": 2
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
			for (var j = 0; j < allSnakes[snake].body.data.length - 1; j++) {
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
	// return res.json(snakeResponse);

}