var PF = require('pathfinding');

var gameState = {
	"width": 16,
	"height": 17,
	"id": 1694,
	"turn": 793,
	"snakes": {
		"data": [
			{
				"id": "cdc0341c-4c57-48cc-989c-1d0262fb0115",
				"health": 97,
				"length": 56,
				"taunt": "I Eat Birds",
				"name": "Brain Eater",
				"object": "snake",
				"body": {
					"data": [
						{
							"object": "point",
							"x": 3,
							"y": 10
						},
						{
							"object": "point",
							"x": 2,
							"y": 10
						},
						{
							"object": "point",
							"x": 2,
							"y": 9
						},
						{
							"object": "point",
							"x": 2,
							"y": 8
						},
						{
							"object": "point",
							"x": 2,
							"y": 7
						},
						{
							"object": "point",
							"x": 2,
							"y": 6
						},
						{
							"object": "point",
							"x": 3,
							"y": 6
						},
						{
							"object": "point",
							"x": 3,
							"y": 7
						},
						{
							"object": "point",
							"x": 3,
							"y": 8
						},
						{
							"object": "point",
							"x": 4,
							"y": 8
						},
						{
							"object": "point",
							"x": 4,
							"y": 7
						},
						{
							"object": "point",
							"x": 5,
							"y": 7
						},
						{
							"object": "point",
							"x": 5,
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
							"y": 5
						},
						{
							"object": "point",
							"x": 5,
							"y": 5
						},
						{
							"object": "point",
							"x": 6,
							"y": 5
						},
						{
							"object": "point",
							"x": 6,
							"y": 4
						},
						{
							"object": "point",
							"x": 7,
							"y": 4
						},
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
							"x": 9,
							"y": 5
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
						},
						{
							"object": "point",
							"x": 11,
							"y": 7
						},
						{
							"object": "point",
							"x": 11,
							"y": 6
						},
						{
							"object": "point",
							"x": 12,
							"y": 6
						},
						{
							"object": "point",
							"x": 12,
							"y": 7
						},
						{
							"object": "point",
							"x": 13,
							"y": 7
						},
						{
							"object": "point",
							"x": 14,
							"y": 7
						},
						{
							"object": "point",
							"x": 15,
							"y": 7
						},
						{
							"object": "point",
							"x": 15,
							"y": 6
						},
						{
							"object": "point",
							"x": 15,
							"y": 5
						},
						{
							"object": "point",
							"x": 15,
							"y": 4
						},
						{
							"object": "point",
							"x": 14,
							"y": 4
						},
						{
							"object": "point",
							"x": 14,
							"y": 5
						},
						{
							"object": "point",
							"x": 13,
							"y": 5
						},
						{
							"object": "point",
							"x": 13,
							"y": 4
						},
						{
							"object": "point",
							"x": 12,
							"y": 4
						},
						{
							"object": "point",
							"x": 12,
							"y": 5
						},
						{
							"object": "point",
							"x": 11,
							"y": 5
						},
						{
							"object": "point",
							"x": 11,
							"y": 4
						},
						{
							"object": "point",
							"x": 11,
							"y": 3
						},
						{
							"object": "point",
							"x": 11,
							"y": 2
						},
						{
							"object": "point",
							"x": 11,
							"y": 1
						},
						{
							"object": "point",
							"x": 10,
							"y": 1
						},
						{
							"object": "point",
							"x": 9,
							"y": 1
						},
						{
							"object": "point",
							"x": 9,
							"y": 2
						},
						{
							"object": "point",
							"x": 9,
							"y": 3
						},
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
						},
						{
							"object": "point",
							"x": 8,
							"y": 2
						},
						{
							"object": "point",
							"x": 8,
							"y": 1
						},
						{
							"object": "point",
							"x": 8,
							"y": 0
						}
					],
					"object": "list"
				}
			},
			{
				"id": "1281fe9a-9b1e-407b-8128-09d3704528a3",
				"health": 100,
				"length": 90,
				"taunt": "📏89 ~ L: 0.003 R: 0 D: 0 U: 0",
				"name": "Secret Snake",
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
							"x": 6,
							"y": 10
						},
						{
							"object": "point",
							"x": 6,
							"y": 9
						},
						{
							"object": "point",
							"x": 6,
							"y": 8
						},
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
							"x": 7,
							"y": 6
						},
						{
							"object": "point",
							"x": 8,
							"y": 6
						},
						{
							"object": "point",
							"x": 9,
							"y": 6
						},
						{
							"object": "point",
							"x": 9,
							"y": 7
						},
						{
							"object": "point",
							"x": 8,
							"y": 7
						},
						{
							"object": "point",
							"x": 7,
							"y": 7
						},
						{
							"object": "point",
							"x": 7,
							"y": 8
						},
						{
							"object": "point",
							"x": 7,
							"y": 9
						},
						{
							"object": "point",
							"x": 7,
							"y": 10
						},
						{
							"object": "point",
							"x": 8,
							"y": 10
						},
						{
							"object": "point",
							"x": 8,
							"y": 9
						},
						{
							"object": "point",
							"x": 8,
							"y": 8
						},
						{
							"object": "point",
							"x": 9,
							"y": 8
						},
						{
							"object": "point",
							"x": 9,
							"y": 9
						},
						{
							"object": "point",
							"x": 9,
							"y": 10
						},
						{
							"object": "point",
							"x": 10,
							"y": 10
						},
						{
							"object": "point",
							"x": 10,
							"y": 9
						},
						{
							"object": "point",
							"x": 10,
							"y": 8
						},
						{
							"object": "point",
							"x": 11,
							"y": 8
						},
						{
							"object": "point",
							"x": 12,
							"y": 8
						},
						{
							"object": "point",
							"x": 12,
							"y": 9
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
						},
						{
							"object": "point",
							"x": 11,
							"y": 11
						},
						{
							"object": "point",
							"x": 12,
							"y": 11
						},
						{
							"object": "point",
							"x": 12,
							"y": 12
						},
						{
							"object": "point",
							"x": 12,
							"y": 13
						},
						{
							"object": "point",
							"x": 12,
							"y": 14
						},
						{
							"object": "point",
							"x": 11,
							"y": 14
						},
						{
							"object": "point",
							"x": 10,
							"y": 14
						},
						{
							"object": "point",
							"x": 9,
							"y": 14
						},
						{
							"object": "point",
							"x": 8,
							"y": 14
						},
						{
							"object": "point",
							"x": 8,
							"y": 13
						},
						{
							"object": "point",
							"x": 8,
							"y": 12
						},
						{
							"object": "point",
							"x": 9,
							"y": 12
						},
						{
							"object": "point",
							"x": 9,
							"y": 13
						},
						{
							"object": "point",
							"x": 10,
							"y": 13
						},
						{
							"object": "point",
							"x": 11,
							"y": 13
						},
						{
							"object": "point",
							"x": 11,
							"y": 12
						},
						{
							"object": "point",
							"x": 10,
							"y": 12
						},
						{
							"object": "point",
							"x": 10,
							"y": 11
						},
						{
							"object": "point",
							"x": 9,
							"y": 11
						},
						{
							"object": "point",
							"x": 8,
							"y": 11
						},
						{
							"object": "point",
							"x": 7,
							"y": 11
						},
						{
							"object": "point",
							"x": 7,
							"y": 12
						},
						{
							"object": "point",
							"x": 7,
							"y": 13
						},
						{
							"object": "point",
							"x": 7,
							"y": 14
						},
						{
							"object": "point",
							"x": 6,
							"y": 14
						},
						{
							"object": "point",
							"x": 6,
							"y": 13
						},
						{
							"object": "point",
							"x": 5,
							"y": 13
						},
						{
							"object": "point",
							"x": 5,
							"y": 12
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
							"x": 4,
							"y": 14
						},
						{
							"object": "point",
							"x": 5,
							"y": 14
						},
						{
							"object": "point",
							"x": 5,
							"y": 15
						},
						{
							"object": "point",
							"x": 4,
							"y": 15
						},
						{
							"object": "point",
							"x": 4,
							"y": 16
						},
						{
							"object": "point",
							"x": 3,
							"y": 16
						},
						{
							"object": "point",
							"x": 2,
							"y": 16
						},
						{
							"object": "point",
							"x": 1,
							"y": 16
						},
						{
							"object": "point",
							"x": 0,
							"y": 16
						},
						{
							"object": "point",
							"x": 0,
							"y": 15
						},
						{
							"object": "point",
							"x": 1,
							"y": 15
						},
						{
							"object": "point",
							"x": 1,
							"y": 14
						},
						{
							"object": "point",
							"x": 2,
							"y": 14
						},
						{
							"object": "point",
							"x": 2,
							"y": 15
						},
						{
							"object": "point",
							"x": 3,
							"y": 15
						},
						{
							"object": "point",
							"x": 3,
							"y": 14
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
							"x": 0,
							"y": 12
						},
						{
							"object": "point",
							"x": 0,
							"y": 11
						},
						{
							"object": "point",
							"x": 1,
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
							"y": 12
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
				"x": 15,
				"y": 2
			},
			{
				"object": "point",
				"x": 7,
				"y": 1
			},
			{
				"object": "point",
				"x": 15,
				"y": 3
			},
			{
				"object": "point",
				"x": 12,
				"y": 1
			},
			{
				"object": "point",
				"x": 13,
				"y": 0
			},
			{
				"object": "point",
				"x": 10,
				"y": 0
			},
			{
				"object": "point",
				"x": 15,
				"y": 11
			},
			{
				"object": "point",
				"x": 15,
				"y": 1
			},
			{
				"object": "point",
				"x": 14,
				"y": 1
			},
			{
				"object": "point",
				"x": 15,
				"y": 9
			},
			{
				"object": "point",
				"x": 2,
				"y": 5
			},
			{
				"object": "point",
				"x": 1,
				"y": 6
			},
			{
				"object": "point",
				"x": 5,
				"y": 3
			},
			{
				"object": "point",
				"x": 7,
				"y": 3
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
		"id": "1281fe9a-9b1e-407b-8128-09d3704528a3",
		"health": 100,
		"length": 90,
		"taunt": "📏89 ~ L: 0.003 R: 0 D: 0 U: 0",
		"name": "Secret Snake",
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
					"x": 6,
					"y": 10
				},
				{
					"object": "point",
					"x": 6,
					"y": 9
				},
				{
					"object": "point",
					"x": 6,
					"y": 8
				},
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
					"x": 7,
					"y": 6
				},
				{
					"object": "point",
					"x": 8,
					"y": 6
				},
				{
					"object": "point",
					"x": 9,
					"y": 6
				},
				{
					"object": "point",
					"x": 9,
					"y": 7
				},
				{
					"object": "point",
					"x": 8,
					"y": 7
				},
				{
					"object": "point",
					"x": 7,
					"y": 7
				},
				{
					"object": "point",
					"x": 7,
					"y": 8
				},
				{
					"object": "point",
					"x": 7,
					"y": 9
				},
				{
					"object": "point",
					"x": 7,
					"y": 10
				},
				{
					"object": "point",
					"x": 8,
					"y": 10
				},
				{
					"object": "point",
					"x": 8,
					"y": 9
				},
				{
					"object": "point",
					"x": 8,
					"y": 8
				},
				{
					"object": "point",
					"x": 9,
					"y": 8
				},
				{
					"object": "point",
					"x": 9,
					"y": 9
				},
				{
					"object": "point",
					"x": 9,
					"y": 10
				},
				{
					"object": "point",
					"x": 10,
					"y": 10
				},
				{
					"object": "point",
					"x": 10,
					"y": 9
				},
				{
					"object": "point",
					"x": 10,
					"y": 8
				},
				{
					"object": "point",
					"x": 11,
					"y": 8
				},
				{
					"object": "point",
					"x": 12,
					"y": 8
				},
				{
					"object": "point",
					"x": 12,
					"y": 9
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
				},
				{
					"object": "point",
					"x": 11,
					"y": 11
				},
				{
					"object": "point",
					"x": 12,
					"y": 11
				},
				{
					"object": "point",
					"x": 12,
					"y": 12
				},
				{
					"object": "point",
					"x": 12,
					"y": 13
				},
				{
					"object": "point",
					"x": 12,
					"y": 14
				},
				{
					"object": "point",
					"x": 11,
					"y": 14
				},
				{
					"object": "point",
					"x": 10,
					"y": 14
				},
				{
					"object": "point",
					"x": 9,
					"y": 14
				},
				{
					"object": "point",
					"x": 8,
					"y": 14
				},
				{
					"object": "point",
					"x": 8,
					"y": 13
				},
				{
					"object": "point",
					"x": 8,
					"y": 12
				},
				{
					"object": "point",
					"x": 9,
					"y": 12
				},
				{
					"object": "point",
					"x": 9,
					"y": 13
				},
				{
					"object": "point",
					"x": 10,
					"y": 13
				},
				{
					"object": "point",
					"x": 11,
					"y": 13
				},
				{
					"object": "point",
					"x": 11,
					"y": 12
				},
				{
					"object": "point",
					"x": 10,
					"y": 12
				},
				{
					"object": "point",
					"x": 10,
					"y": 11
				},
				{
					"object": "point",
					"x": 9,
					"y": 11
				},
				{
					"object": "point",
					"x": 8,
					"y": 11
				},
				{
					"object": "point",
					"x": 7,
					"y": 11
				},
				{
					"object": "point",
					"x": 7,
					"y": 12
				},
				{
					"object": "point",
					"x": 7,
					"y": 13
				},
				{
					"object": "point",
					"x": 7,
					"y": 14
				},
				{
					"object": "point",
					"x": 6,
					"y": 14
				},
				{
					"object": "point",
					"x": 6,
					"y": 13
				},
				{
					"object": "point",
					"x": 5,
					"y": 13
				},
				{
					"object": "point",
					"x": 5,
					"y": 12
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
					"x": 4,
					"y": 14
				},
				{
					"object": "point",
					"x": 5,
					"y": 14
				},
				{
					"object": "point",
					"x": 5,
					"y": 15
				},
				{
					"object": "point",
					"x": 4,
					"y": 15
				},
				{
					"object": "point",
					"x": 4,
					"y": 16
				},
				{
					"object": "point",
					"x": 3,
					"y": 16
				},
				{
					"object": "point",
					"x": 2,
					"y": 16
				},
				{
					"object": "point",
					"x": 1,
					"y": 16
				},
				{
					"object": "point",
					"x": 0,
					"y": 16
				},
				{
					"object": "point",
					"x": 0,
					"y": 15
				},
				{
					"object": "point",
					"x": 1,
					"y": 15
				},
				{
					"object": "point",
					"x": 1,
					"y": 14
				},
				{
					"object": "point",
					"x": 2,
					"y": 14
				},
				{
					"object": "point",
					"x": 2,
					"y": 15
				},
				{
					"object": "point",
					"x": 3,
					"y": 15
				},
				{
					"object": "point",
					"x": 3,
					"y": 14
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
					"x": 0,
					"y": 12
				},
				{
					"object": "point",
					"x": 0,
					"y": 11
				},
				{
					"object": "point",
					"x": 1,
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
					"y": 12
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

if (!path.length) {
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
	snakeResponse.taunt = taunts[3];

}
console.log(snakeResponse);
// return res.json(snakeResponse);


