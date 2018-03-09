//This File is used for testing logic w/o running a server
//Simply replace the gameState JSON with a /move request JSON to test the server's response to the board.

var PF = require('pathfinding');

var gameState = {
	"width": 11,
	"height": 14,
	"id": 32462,
	"turn": 161,
	"snakes": {
		"data": [
			{
				"id": "744a925e-7a45-426b-ad71-e10a5d88fc77",
				"health": 23,
				"length": 5,
				"taunt": "\"simple eat\"",
				"name": "Training Snake 8",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 9,
							"y": 8
						},
						{
							"object": "point",
							"x": 9,
							"y": 7
						},
						{
							"object": "point",
							"x": 9,
							"y": 6
						},
						{
							"object": "point",
							"x": 9,
							"y": 5
						},
						{
							"object": "point",
							"x": 8,
							"y": 5
						}
					],
					"object": "list"
				}
			},
			{
				"id": "38747a0d-388d-43cc-a2e4-938f0c8ccb53",
				"health": 97,
				"length": 23,
				"taunt": "\"Don't make me run, I'm full of Chocolate!\"",
				"name": "Uter",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 7,
							"y": 10
						},
						{
							"object": "point",
							"x": 7,
							"y": 9
						},
						{
							"object": "point",
							"x": 7,
							"y": 8
						},
						{
							"object": "point",
							"x": 7,
							"y": 7
						},
						{
							"object": "point",
							"x": 7,
							"y": 6
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
						},
						{
							"object": "point",
							"x": 5,
							"y": 5
						},
						{
							"object": "point",
							"x": 4,
							"y": 5
						},
						{
							"object": "point",
							"x": 4,
							"y": 4
						},
						{
							"object": "point",
							"x": 4,
							"y": 3
						},
						{
							"object": "point",
							"x": 4,
							"y": 2
						},
						{
							"object": "point",
							"x": 4,
							"y": 1
						},
						{
							"object": "point",
							"x": 5,
							"y": 1
						},
						{
							"object": "point",
							"x": 6,
							"y": 1
						},
						{
							"object": "point",
							"x": 7,
							"y": 1
						},
						{
							"object": "point",
							"x": 8,
							"y": 1
						},
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
							"x": 10,
							"y": 2
						},
						{
							"object": "point",
							"x": 10,
							"y": 3
						},
						{
							"object": "point",
							"x": 10,
							"y": 4
						},
						{
							"object": "point",
							"x": 10,
							"y": 5
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
				"x": 0,
				"y": 0
			},
			{
				"object": "point",
				"x": 8,
				"y": 12
			},
			{
				"object": "point",
				"x": 2,
				"y": 9
			},
			{
				"object": "point",
				"x": 6,
				"y": 10
			}
		],
		"object": "list"
	},
	"object": "world",
	"dead_snakes": {
		"data": [
			{
				"id": "e7ac3181-c0c5-4421-a13a-c992a0942bf2",
				"health": 97,
				"length": 17,
				"taunt": "TIMED OUT",
				"name": "kind of timid uter",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 4,
							"y": 12
						},
						{
							"object": "point",
							"x": 4,
							"y": 13
						},
						{
							"object": "point",
							"x": 3,
							"y": 13
						},
						{
							"object": "point",
							"x": 2,
							"y": 13
						},
						{
							"object": "point",
							"x": 1,
							"y": 13
						},
						{
							"object": "point",
							"x": 1,
							"y": 12
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
							"x": 4,
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
							"y": 13
						},
						{
							"object": "point",
							"x": 6,
							"y": 13
						},
						{
							"object": "point",
							"x": 6,
							"y": 12
						},
						{
							"object": "point",
							"x": 6,
							"y": 11
						},
						{
							"object": "point",
							"x": 5,
							"y": 11
						},
						{
							"object": "point",
							"x": 4,
							"y": 11
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
				"id": "0d3fba4d-7f01-460c-95e9-28cd154db839",
				"health": 80,
				"length": 4,
				"taunt": "\"up\"",
				"name": "Training Snake 9",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 3,
							"y": 4
						},
						{
							"object": "point",
							"x": 3,
							"y": 5
						},
						{
							"object": "point",
							"x": 3,
							"y": 4
						},
						{
							"object": "point",
							"x": 4,
							"y": 4
						}
					],
					"object": "list"
				}
			},
			{
				"id": "44c4c271-d6f1-4007-99e2-918ffa81af94",
				"health": 92,
				"length": 6,
				"taunt": "\"Look at my long flowing hair!\"",
				"name": "Bird Snake",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 11,
							"y": 0
						},
						{
							"object": "point",
							"x": 10,
							"y": 0
						},
						{
							"object": "point",
							"x": 9,
							"y": 0
						},
						{
							"object": "point",
							"x": 8,
							"y": 0
						},
						{
							"object": "point",
							"x": 7,
							"y": 0
						},
						{
							"object": "point",
							"x": 6,
							"y": 0
						}
					],
					"object": "list"
				}
			}
		],
		"object": "list"
	},
	"you": {
		"id": "38747a0d-388d-43cc-a2e4-938f0c8ccb53",
		"health": 97,
		"length": 23,
		"taunt": "\"Don't make me run, I'm full of Chocolate!\"",
		"name": "Uter",
		"object": "snake",
		"body": {
			"data": [
				{
					"object": "point",
					"x": 7,
					"y": 10
				},
				{
					"object": "point",
					"x": 7,
					"y": 9
				},
				{
					"object": "point",
					"x": 7,
					"y": 8
				},
				{
					"object": "point",
					"x": 7,
					"y": 7
				},
				{
					"object": "point",
					"x": 7,
					"y": 6
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
				},
				{
					"object": "point",
					"x": 5,
					"y": 5
				},
				{
					"object": "point",
					"x": 4,
					"y": 5
				},
				{
					"object": "point",
					"x": 4,
					"y": 4
				},
				{
					"object": "point",
					"x": 4,
					"y": 3
				},
				{
					"object": "point",
					"x": 4,
					"y": 2
				},
				{
					"object": "point",
					"x": 4,
					"y": 1
				},
				{
					"object": "point",
					"x": 5,
					"y": 1
				},
				{
					"object": "point",
					"x": 6,
					"y": 1
				},
				{
					"object": "point",
					"x": 7,
					"y": 1
				},
				{
					"object": "point",
					"x": 8,
					"y": 1
				},
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
					"x": 10,
					"y": 2
				},
				{
					"object": "point",
					"x": 10,
					"y": 3
				},
				{
					"object": "point",
					"x": 10,
					"y": 4
				},
				{
					"object": "point",
					"x": 10,
					"y": 5
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

//Create an empty board
const grid = new PF.Grid(gameState.width, gameState.height);

//Marks areas on the Grid where the snake can't pass into
function setGrid(gs, grid) {
	//Mark my snake in grid
	for (let i = 1; i < gs.you.body.data.length - 1; i++) {
		grid.setWalkableAt(gs.you.body.data[i].x, gs.you.body.data[i].y, false);
	}
	//Mark other snake heads
	const allSnakes = gs.snakes.data
	for (let snake in allSnakes) {
		if (allSnakes[snake].id !== gs.you.id) {
			//Don't run into body

			// Account for other snakes length depending on whether they had eaten in the last turn
			// NOT WORKING
			// let snakeIndex = allSnakes[snake].body.data.length - 2;
			// if (allSnakes[snake].body.data[snakeIndex + 1].x == allSnakes[snake].body.data[snakeIndex].x && allSnakes[snake].body.data[snakeIndex + 1].y == allSnakes[snake].body.data[snakeIndex].y) {
			//   snakeIndex++
			// }
			for (let j = 0; j < allSnakes[snake].body.data.length - 1; j++) {
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

// Set the board, choose the target and generate a path
setGrid(gameState, grid);
const closestTarget = chooseTarget(gameState);
const finder = new PF.AStarFinder;
const path = finder.findPath(myHead.x, myHead.y, closestTarget.x, closestTarget.y, grid);
const snakeResponse = {};

// if no path exists or a bigger snake can move into the same space choose a safe direction
if (!path.length || (path.length === 2 && !grid.nodes[path[0][1]][path[0][0]].walkable)) {
	// console.log('NO PATH')
	const possibleMoves = [
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
		for (let i = 0; i < gs.you.body.data.length - 1; i++) {
			for (let move in pm) {
				if (pm[move].x === gs.you.body.data[i].x && pm[move].y === gs.you.body.data[i].y) {
					pm[move].valid = false;
				}
			}
		}
	}

	//Stop from running into wall
	function checkEdges(gs, pm) {
		for (let move in pm) {
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
		const allSnakes = gs.snakes.data
		for (let snake in allSnakes) {
			if (allSnakes[snake].id !== gs.you.id) {
				//Don't run into body
				for (let i = 0; i < allSnakes[snake].body.data.length - 1; i++) {
					for (let move in pm) {
						if (pm[move].x === allSnakes[snake].body.data[i].x && pm[move].y === allSnakes[snake].body.data[i].y) {
							pm[move].valid = false;
						}
					}
				}
				//Decide on head collision depending on size
				if (allSnakes[snake].length >= gs.you.length) {
					for (let move in pm) {
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

	const validMoves = [];
	for (let i in possibleMoves) {
		if (possibleMoves[i].valid) {
			validMoves.push(possibleMoves[i]);
		}
	}

	// if no spaces are safe, this will allow to move into spaces bigger snakes can allow move into
	if (!validMoves.length) {
		// console.log('NO PATH, NO OPEN MOVES');

		//Reset possibleMoves
		for (let i in possibleMoves) {
			possibleMoves[i].valid = true
		}

		//Recheck possibleMoves but ignoring larger snakes
		gameState.you.length += 100;
		checkSelf(gameState, possibleMoves);
		checkEdges(gameState, possibleMoves);
		checkSnakes(gameState, possibleMoves);
		for (let i in possibleMoves) {
			if (possibleMoves[i].valid) {
				validMoves.push(possibleMoves[i]);
			}
		}
	}

	snakeResponse.move = validMoves[0].direction;
	snakeResponse.taunt = taunts[1];
	console.log(snakeResponse);
	// return res.json(snakeResponse);

} else {

	snakeResponse.move = setMove(path, myHead);
	snakeResponse.taunt = taunts[getTaunt(gameState)];
	console.log(snakeResponse);
	// return res.json(snakeResponse);

}

//Helper functions

//Convert the calculated path coords to a direction of movement
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
		return 'down';
	}
}

// Make Uter say funny things for hilarity
function getTaunt(gs) {
	let tauntIndex = 0;
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

//Determines the distance from the snakes head to something
const getDistance = (a, b, head) => (Math.abs(a - head.x) + Math.abs(b - head.y));

//return the closest food item
function findFood(gs) {
	const allTargets = [];
	for (let i in gs.food.data) {
		let distance = getDistance(gs.food.data[i].x, gs.food.data[i].y, myHead);
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
	if (snakeLength === 1) {
		return findFood(gs);
	}
	let tailPosition = snakeBody.body.data[snakeLength - 1];
	return tailPosition;

}


//Determine the longest snake
function getLongestLength(gs) {
	const allSnakes = gs.snakes.data
	let longestSnake = 0;
	for (let snake in allSnakes) {
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
	// if (gs.you.length < getLongestLength(gs)){
	//     return findFood(gs);
	// } else 
	if (gs.snakes.data.length == 2) {
		if (gs.you.health > 40) {
			return findTail(gs);
		} else {
			return findFood(gs);
		}
	} else {
		return findFood(gs);
	}
}
