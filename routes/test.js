var PF = require('pathfinding');

var gameState = {
	"width": 13,
	"height": 14,
	"id": 2231,
	"turn": 4,
	"snakes": {
		"data": [
			{
				"id": "0c75298e-0045-4f8b-9524-a552f881f08b",
				"health": 98,
				"length": 4,
				"taunt": "\"You've just been ERASED!!\"",
				"name": "chiseler",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 10,
							"y": 6
						},
						{
							"object": "point",
							"x": 10,
							"y": 7
						},
						{
							"object": "point",
							"x": 10,
							"y": 8
						},
						{
							"object": "point",
							"x": 9,
							"y": 8
						}
					],
					"object": "list"
				}
			},
			{
				"id": "744a925e-7a45-426b-ad71-e10a5d88fc77",
				"health": 96,
				"length": 3,
				"taunt": "\"tail\"",
				"name": "Training Snake 8",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 7,
							"y": 5
						},
						{
							"object": "point",
							"x": 8,
							"y": 5
						},
						{
							"object": "point",
							"x": 8,
							"y": 4
						}
					],
					"object": "list"
				}
			},
			{
				"id": "90bc6875-358f-4cfe-adff-03ed1f4f0f49",
				"health": 96,
				"length": 3,
				"taunt": "\"Bears, Beets, Battlestar Galactica\"",
				"name": "Dwight",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 3,
							"y": 3
						},
						{
							"object": "point",
							"x": 4,
							"y": 3
						},
						{
							"object": "point",
							"x": 5,
							"y": 3
						}
					],
					"object": "list"
				}
			},
			{
				"id": "0d3fba4d-7f01-460c-95e9-28cd154db839",
				"health": 96,
				"length": 3,
				"taunt": "\"tail\"",
				"name": "Training Snake 9",
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
				"id": "a3a3d33c-3d4d-4424-847d-cab2a60f37d7",
				"health": 97,
				"length": 4,
				"taunt": "\"A token of gratitude is nonsensical, much like me.\"",
				"name": "dsnek",
				"object": "snake",
				"body": {
					"data": [
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
							"x": 7,
							"y": 0
						}
					],
					"object": "list"
				}
			},
			{
				"id": "b9607442-b09e-4f58-b9dc-91a72843ccd3",
				"health": 96,
				"length": 3,
				"taunt": "\"Whew\"",
				"name": "ok",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 1,
							"y": 11
						},
						{
							"object": "point",
							"x": 1,
							"y": 10
						},
						{
							"object": "point",
							"x": 0,
							"y": 10
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
							"x": 8,
							"y": 6
						},
						{
							"object": "point",
							"x": 8,
							"y": 7
						},
						{
							"object": "point",
							"x": 8,
							"y": 8
						},
						{
							"object": "point",
							"x": 7,
							"y": 8
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
				"y": 5
			},
			{
				"object": "point",
				"x": 2,
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
				"y": 9
			},
			{
				"object": "point",
				"x": 5,
				"y": 5
			},
			{
				"object": "point",
				"x": 7,
				"y": 13
			},
			{
				"object": "point",
				"x": 4,
				"y": 7
			},
			{
				"object": "point",
				"x": 9,
				"y": 6
			},
			{
				"object": "point",
				"x": 11,
				"y": 4
			},
			{
				"object": "point",
				"x": 6,
				"y": 8
			},
			{
				"object": "point",
				"x": 6,
				"y": 13
			},
			{
				"object": "point",
				"x": 5,
				"y": 7
			},
			{
				"object": "point",
				"x": 4,
				"y": 6
			},
			{
				"object": "point",
				"x": 5,
				"y": 4
			},
			{
				"object": "point",
				"x": 7,
				"y": 3
			},
			{
				"object": "point",
				"x": 5,
				"y": 8
			},
			{
				"object": "point",
				"x": 1,
				"y": 9
			},
			{
				"object": "point",
				"x": 7,
				"y": 10
			},
			{
				"object": "point",
				"x": 4,
				"y": 2
			},
			{
				"object": "point",
				"x": 2,
				"y": 12
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
					"x": 8,
					"y": 6
				},
				{
					"object": "point",
					"x": 8,
					"y": 7
				},
				{
					"object": "point",
					"x": 8,
					"y": 8
				},
				{
					"object": "point",
					"x": 7,
					"y": 8
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
// const myHead = {
// 	x: gameState.you.body.data[0].x,
// 	y: gameState.you.body.data[0].y
// }

// const grid = new PF.Grid(gameState.width, gameState.height);

// function setGrid() {
// 	//Mark my snake in grid
// 	for (var i = 1; i < gameState.you.body.data.length - 1; i++) {
// 		grid.setWalkableAt(gameState.you.body.data[i].x, gameState.you.body.data[i].y, false);
// 	}
// 	//Mark other snake heads
// 	const allSnakes = gameState.snakes.data
// 	for (var snake in allSnakes) {
// 		if (allSnakes[snake].id !== gameState.you.id) {
// 			//Don't run into body
// 			for (var j = 0; j < allSnakes[snake].body.data.length; j++) {
// 				grid.setWalkableAt(allSnakes[snake].body.data[j].x, allSnakes[snake].body.data[j].y, false);
// 			}
// 			//Decide on head collision depending on size
// 			if (gameState.you.length <= allSnakes[snake].length) {
// 				//Pathfinding will throw an error if we try to set a space outside the board
// 				if (allSnakes[snake].body.data[0].x + 1 < gameState.width) {
// 					grid.setWalkableAt((allSnakes[snake].body.data[0].x + 1), allSnakes[snake].body.data[0].y, false);
// 				}
// 				if (allSnakes[snake].body.data[0].x - 1 >= 0) {
// 					grid.setWalkableAt((allSnakes[snake].body.data[0].x - 1), allSnakes[snake].body.data[0].y, false);
// 				}
// 				if (allSnakes[snake].body.data[0].y + 1 < gameState.height) {
// 					grid.setWalkableAt(allSnakes[snake].body.data[0].x, (allSnakes[snake].body.data[0].y + 1), false);
// 				}
// 				if (allSnakes[snake].body.data[0].y - 1 >= 0) {
// 					grid.setWalkableAt(allSnakes[snake].body.data[0].x, (allSnakes[snake].body.data[0].y - 1), false);
// 				}
// 			}
// 		}
// 	}
// }

// function findTarget() {
// 	// console.log(gameState.food.data);
// 	var allTargets = [];
// 	for (var i in gameState.food.data) {
// 		var distance = Math.abs(gameState.food.data[i].x - myHead.x) + Math.abs(gameState.food.data[i].y - myHead.y);
// 		// console.log('distance', distance);
// 		allTargets.push({
// 			x: gameState.food.data[i].x,
// 			y: gameState.food.data[i].y,
// 			distance: distance
// 		})
// 	}
// 	allTargets.sort(function (a, b) {
// 		return a.distance - b.distance;
// 	});
// 	return allTargets[0];
// }

// setGrid();
// const targets = findTarget();
// const finder = new PF.AStarFinder;
// const path = finder.findPath(myHead.x, myHead.y, targets.x, targets.y, grid);
// // console.log('the path', path, path.length)

// // var path = [];
// // var pathNum = 0;
// // while (!path.length) {
// // 	path = finder.findPath(myHead.x, myHead.y, targets[pathNum].x, targets[pathNum].y, grid);
// // 	pathNum ++;
// // }
// const snakeResponse = {};

// // if (!path.length) {
// 	// path = finder.findPath(myHead.x, myHead.y, targets.x, targets.y, grid);
// // }

// if(!path.length) {
// var possibleMoves = [
// 	{
// 		direction: "right",
// 		x: myHead.x + 1,
// 		y: myHead.y,
// 		valid: true
// 	},
// 	{
// 		direction: "down",
// 		x: myHead.x,
// 		y: myHead.y + 1,
// 		valid: true
// 	},
// 	{
// 		direction: "left",
// 		x: myHead.x - 1,
// 		y: myHead.y,
// 		valid: true
// 	},
// 	{
// 		direction: "up",
// 		x: myHead.x,
// 		y: myHead.y - 1,
// 		valid: true
// 	},
// ]

// // Stop the snake from running into itself
// function checkSelf() {
// 	for (var i = 0; i < gameState.you.body.data.length; i++) {
// 		for (var move in possibleMoves) {
// 			if (possibleMoves[move].x === gameState.you.body.data[i].x && possibleMoves[move].y === gameState.you.body.data[i].y) {
// 				possibleMoves[move].valid = false;
// 			}
// 		}
// 	}
// }

// //Stop from running into wall
// function checkEdges() {
// 	for (var move in possibleMoves) {
// 		// console.log('yup')
// 		if (possibleMoves[move].x < 0 || possibleMoves[move].x > gameState.width) {
// 			possibleMoves[move].valid = false;
// 		}
// 		if (possibleMoves[move].y < 0 || possibleMoves[move].y > gameState.height) {
// 			possibleMoves[move].valid = false;
// 		}
// 	}
// }

// //check for other snakes
// function checkSnakes() {
// 	var allSnakes = gameState.snakes.data
// 	for (var snake in allSnakes) {
// 		if (allSnakes[snake].id !== gameState.you.id) {
// 			// console.log('Found enemy')
// 			// console.log(allSnakes[snake]);
// 			//Don't run into body
// 			for (var i = 0; i < allSnakes[snake].body.data.length; i++) {
// 				for (var move in possibleMoves) {
// 					if (possibleMoves[move].x === allSnakes[snake].body.data[i].x && possibleMoves[move].y === allSnakes[snake].body.data[i].y) {
// 						possibleMoves[move].valid = false;
// 					}
// 				}
// 			}
// 			//Decide on head collision depending on size
// 		}
// 	}
// }

// var validMoves = [];
// for (var i in possibleMoves) {
// 	possibleMoves[i].valid = grid.nodes[possibleMoves[i].y][possibleMoves[i].x].walkable;
// 	if (possibleMoves[i].valid) {
// 		validMoves.push(possibleMoves[i]);
// 	}
// }
// console.log(validMoves);
// 	snakeResponse.move = validMoves[0];
// 	snakeResponse.taunt= taunts[5];
//   console.log('plan b\n')

// } else {
// function setMove() {
// 	if (path[1][0] === myHead.x && path[1][1] === myHead.y + 1) {
// 		return 'down';
// 	} else if (path[1][0] === myHead.x && path[1][1] === myHead.y - 1) {
// 		return 'up';
// 	} else if (path[1][0] === myHead.x + 1 && path[1][1] === myHead.y) {
// 		return 'right';
// 	} else if (path[1][0] === myHead.x - 1 && path[1][1] === myHead.y) {
// 		return 'left';
// 	} else {
// 		return 'up';
// 	}
// }

// snakeResponse.move = setMove();
// snakeResponse.taunt = taunts[3];
// console.log('plan a\n')
// }

// console.log(snakeResponse)

// // console.log("my snak head? \n", myHead);
// // console.log('snek', gameState.you);
// var mySnekBody = gameState.you.body.data;

// // console.log(mySnekBody);

// var possibleMoves = [
// 	{
// 		direction: "right",
// 		x: myHead.x + 1,
// 		y: myHead.y,
// 		valid: true
// 	},
// 	{
// 		direction: "down",
// 		x: myHead.x,
// 		y: myHead.y + 1,
// 		valid: true
// 	},
// 	{
// 		direction: "left",
// 		x: myHead.x - 1,
// 		y: myHead.y,
// 		valid: true
// 	},
// 	{
// 		direction: "up",
// 		x: myHead.x,
// 		y: myHead.y - 1,
// 		valid: true
// 	},
// ]

// // Stop the snake from running into itself
// function checkSelf() {
// 	for (var i = 0; i < gameState.you.body.data.length; i++) {
// 		for (var move in possibleMoves) {
// 			if (possibleMoves[move].x === gameState.you.body.data[i].x && possibleMoves[move].y === gameState.you.body.data[i].y) {
// 				possibleMoves[move].valid = false;
// 			}
// 		}
// 	}
// }

// //Stop from running into wall
// function checkEdges() {
// 	for (var move in possibleMoves) {
// 		// console.log('yup')
// 		if (possibleMoves[move].x < 0 || possibleMoves[move].x > gameState.width) {
// 			possibleMoves[move].valid = false;
// 		}
// 		if (possibleMoves[move].y < 0 || possibleMoves[move].y > gameState.height) {
// 			possibleMoves[move].valid = false;
// 		}
// 	}
// } 

// 	//check for other snakes
// function checkSnakes() {
// 	var allSnakes = gameState.snakes.data
// 	for (var snake in allSnakes) {
// 		if (allSnakes[snake].id !== gameState.you.id) {
// 			// console.log('Found enemy')
// 			// console.log(allSnakes[snake]);
// 			//Don't run into body
// 			for (var i = 0; i < allSnakes[snake].body.data.length; i++) {
// 				for (var move in possibleMoves) {
// 					if (possibleMoves[move].x === allSnakes[snake].body.data[i].x && possibleMoves[move].y === allSnakes[snake].body.data[i].y) {
// 						possibleMoves[move].valid = false;
// 					}
// 				}
// 			}
// 			//Decide on head collision depending on size
// 		}
// 	}
// }

// var validMoves = [];
// for (var i in possibleMoves) {
//   possibleMoves[i].valid = grid.nodes[possibleMoves[i].y][possibleMoves[i].x].walkable;
//   if (possibleMoves[i].valid) { 
//     validMoves.push(possibleMoves[i]);
//   }
// }
// // console.log(validMoves);

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
const snakeResponse = {};

console.log('first path', path[0])
// console.log(grid.nodes[path[0][1]][path[0][0]])
// console.log(grid.nodes[path[0][1]][path[0][0]].walkable)
if (!path.length || (path.length === 2 && !grid.nodes[path[0][1]][path[0][0]].walkable)) {
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

	var validMoves = [];
	for (var i in possibleMoves) {
		possibleMoves[i].valid = grid.nodes[possibleMoves[i].y][possibleMoves[i].x].walkable;
		if (possibleMoves[i].valid) {
			validMoves.push(possibleMoves[i]);
		}
	}
	console.log(validMoves);
	snakeResponse.move = validMoves[0];
	snakeResponse.taunt = taunts[5];
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
	snakeResponse.taunt = getTaunt();

}
console.log(snakeResponse);
// return res.json(snakeResponse);


