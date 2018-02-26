var PF = require('pathfinding');

var gameState = {
    "food": {
        "data": [
            {
                "object": "point",
                "x": 0,
                "y": 9
            }
        ],
        "object": "list"
    },
    "height": 20,
    "id": 1,
    "object": "world",
    "snakes": {
        "data": [
            {
                "body": {
                    "data": [
                        {
                            "object": "point",
                            "x": 13,
                            "y": 19
                        },
                        {
                            "object": "point",
                            "x": 13,
                            "y": 19
                        },
                        {
                            "object": "point",
                            "x": 13,
                            "y": 19
                        }
                    ],
                    "object": "list"
                },
                "health": 100,
                "id": "58a0142f-4cd7-4d35-9b17-815ec8ff8e70",
                "length": 3,
                "name": "Sonic Snake",
                "object": "snake",
                "taunt": "Gotta go fast"
            },
            {
                "body": {
                    "data": [
                        {
                            "object": "point",
                            "x": 8,
                            "y": 15
                        },
                        {
                            "object": "point",
                            "x": 8,
                            "y": 15
                        },
                        {
                            "object": "point",
                            "x": 8,
                            "y": 15
                        }
                    ],
                    "object": "list"
                },
                "health": 100,
                "id": "48ca23a2-dde8-4d0f-b03a-61cc9780427e",
                "length": 3,
                "name": "Typescript Snake",
                "object": "snake",
                "taunt": ""
            }
        ],
        "object": "list"
    },
    "turn": 0,
    "width": 20,
    "you": {
        "body": {
            "data": [
                {
                    "object": "point",
                    "x": 8,
                    "y": 15
                },
                {
                    "object": "point",
                    "x": 8,
                    "y": 16
                },
                {
                    "object": "point",
                    "x": 8,
                    "y": 17
                }
            ],
            "object": "list"
        },
        "health": 100,
        "id": "48ca23a2-dde8-4d0f-b03a-61cc9780427e",
        "length": 3,
        "name": "Typescript Snake",
        "object": "snake",
        "taunt": ""
    }
};

var myHead = { 
    x: gameState.you.body.data[0].x,
    y: gameState.you.body.data[0].y
}

var grid = new PF.Grid(gameState.width, gameState.height);

function setGrid() {
	//Mark my snake in grid
	for (let i = 0; i < gameState.you.body.data.length; i++) {
		grid.setWalkableAt(gameState.you.body.data[i].x, gameState.you.body.data[i].y, false);
	}
	//Mark other snake heads
	var allSnakes = gameState.snakes.data
	for (var snake in allSnakes) {
		if (allSnakes[snake].id !== gameState.you.id) {
			//Don't run into body
			for (let j = 0; j < allSnakes[snake].body.data.length; j++) {
				grid.setWalkableAt(allSnakes[snake].body.data[j].x, allSnakes[snake].body.data[j].y, false);	
			}
			//Decide on head collision depending on size
			if (gameState.you.length <= allSnakes[snake].length) {
				console.log('he can beat us');
				if (allSnakes[snake].body.data[0].x + 1 < gameState.width) {
					grid.setWalkableAt((allSnakes[snake].body.data[0].x + 1), allSnakes[snake].body.data[0].y, false);
				}
				if (allSnakes[snake].body.data[0].x - 1 >=0) {
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
console.log(grid.nodes[19]);




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