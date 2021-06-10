//Piece Textures
const textures = {
  I: PIXI.Texture.from("/assets/blocks/I.png"),
  L: PIXI.Texture.from("/assets/blocks/L.png"),
  J: PIXI.Texture.from("/assets/blocks/J.png"),
  O: PIXI.Texture.from("/assets/blocks/O.png"),
  S: PIXI.Texture.from("/assets/blocks/S.png"),
  T: PIXI.Texture.from("/assets/blocks/T.png"),
  Z: PIXI.Texture.from("/assets/blocks/Z.png"),
  N: PIXI.Texture.from("/assets/blocks/N.png"),
};
const app = new PIXI.Application({ width: 300, height: 600 });
//Piece definitions including rotations
const pieces = {
  O: [
    [
      ["O", "O"],
      ["O", "O"],
    ],
    [
      ["O", "O"],
      ["O", "O"],
    ],
    [
      ["O", "O"],
      ["O", "O"],
    ],
    [
      ["O", "O"],
      ["O", "O"],
    ],
  ],

  I: [
    [
      ["N", "N", "N", "N"],
      ["I", "I", "I", "I"],
      ["N", "N", "N", "N"],
      ["N", "N", "N", "N"],
    ],
    [
      ["N", "N", "I", "N"],
      ["N", "N", "I", "N"],
      ["N", "N", "I", "N"],
      ["N", "N", "I", "N"],
    ],
    [
      ["N", "N", "N", "N"],
      ["N", "N", "N", "N"],
      ["I", "I", "I", "I"],
      ["N", "N", "N", "N"],
    ],
    [
      ["N", "I", "N", "N"],
      ["N", "I", "N", "N"],
      ["N", "I", "N", "N"],
      ["N", "I", "N", "N"],
    ],
  ],

  Z: [
    [
      ["Z", "Z", "N"],
      ["N", "Z", "Z"],
      ["N", "N", "N"],
    ],
    [
      ["N", "N", "Z"],
      ["N", "Z", "Z"],
      ["N", "Z", "N"],
    ],
    [
      ["N", "N", "N"],
      ["Z", "Z", "N"],
      ["N", "Z", "Z"],
    ],
    [
      ["N", "Z", "N"],
      ["Z", "Z", "N"],
      ["Z", "N", "N"],
    ],
  ],

  S: [
    [
      ["N", "S", "S"],
      ["S", "S", "N"],
      ["N", "N", "N"],
    ],
    [
      ["N", "S", "N"],
      ["N", "S", "S"],
      ["N", "N", "S"],
    ],
    [
      ["N", "N", "N"],
      ["N", "S", "S"],
      ["S", "S", "N"],
    ],
    [
      ["S", "N", "N"],
      ["S", "S", "N"],
      ["N", "S", "N"],
    ],
  ],

  T: [
    [
      ["N", "T", "N"],
      ["T", "T", "T"],
      ["N", "N", "N"],
    ],
    [
      ["N", "T", "N"],
      ["N", "T", "T"],
      ["N", "T", "N"],
    ],
    [
      ["N", "N", "N"],
      ["T", "T", "T"],
      ["N", "T", "N"],
    ],
    [
      ["N", "T", "N"],
      ["T", "T", "N"],
      ["N", "T", "N"],
    ],
  ],

  L: [
    [
      ["N", "N", "L"],
      ["L", "L", "L"],
      ["N", "N", "N"],
    ],
    [
      ["N", "L", "N"],
      ["N", "L", "N"],
      ["N", "L", "L"],
    ],
    [
      ["N", "N", "N"],
      ["L", "L", "L"],
      ["L", "N", "N"],
    ],
    [
      ["L", "L", "N"],
      ["N", "L", "N"],
      ["N", "L", "N"],
    ],
  ],

  J: [
    [
      ["J", "N", "N"],
      ["J", "J", "J"],
      ["N", "N", "N"],
    ],
    [
      ["N", "J", "J"],
      ["N", "J", "N"],
      ["N", "J", "N"],
    ],
    [
      ["N", "N", "N"],
      ["J", "J", "J"],
      ["N", "N", "J"],
    ],
    [
      ["N", "J", "N"],
      ["N", "J", "N"],
      ["J", "J", "N"],
    ],
  ],
};

//Loaded board state
const boardState = [
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "J"],
  ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
  ["N", "N", "N", "N", "N", "N", "N", "O", "N", "N"],
];

//Initialize Board
let gameBoard = [];

gameBoard.push(["W", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "W"]);
for (i = 0; i < 20; i++) {
  let gameRow = [];
  gameRow.push("W");
  for (j = 0; j < 10; j++) {
    let block = new PIXI.Sprite(textures[boardState[i][j]]);
    block.x = j * 30;
    block.y = i * 30;
    app.stage.addChild(block);
    gameRow.push(block);
  }
  gameRow.push("W");
  gameBoard.push(gameRow);
}
gameBoard.push(["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"]);

let piecesLoc = [];
let piecePos = null;
let pieceRotation = 0;
let pieceValue = "";

//https://stackoverflow.com/questions/19543514/check-whether-an-array-exists-in-an-array-of-arrays
function searchForArray(haystack, needle) {
  var i, j, current;
  for (i = 0; i < haystack.length; ++i) {
    if (needle.length === haystack[i].length) {
      current = haystack[i];
      for (j = 0; j < needle.length && needle[j] === current[j]; ++j);
      if (j === needle.length) return i;
    }
  }
  return -1;
}
//Delete current piece in board
function deletePiece() {
  if (piecesLoc != []) {
    piecesLoc.forEach((loc) => {
      gameBoard[loc[0]][loc[1]].texture = textures["N"];
    });
    piecesLoc = [];
  }
}
//Initialize Piece
//x : int -> x location to render the piece in
//y : int -> y location to render the piece in
//piece : string -> Piece to be initilized
//rotation : int -> Rotation to render the piece in
function renderPiece(x, y, piece, rotation) {
  //Check if the piece can render
  for (i = 0; i < pieces[piece][0].length; i++) {
    for (j = 0; j < pieces[piece][0].length; j++) {
      if (pieces[piece][rotation][i][j] != "N") {
        if (
          searchForArray(piecesLoc, [i + y, x + j]) != -1 ||
          gameBoard[i + y][j + x] == "N"
        ) {
          continue;
        } else if (
          gameBoard[i + y][j + x] == "W" ||
          gameBoard[i + y][j + x].texture != textures["N"]
        ) {
          return false;
        }
      }
    }
  }
  //Delete old piece
  deletePiece();
  //Render the piece
  for (i = 0; i < pieces[piece][0].length; i++) {
    for (j = 0; j < pieces[piece][0].length; j++) {
      if (
        pieces[piece][rotation][i][j] != "N" &&
        gameBoard[i + y][j + x] != "W" &&
        gameBoard[i + y][j + x] != "N"
      ) {
        piecesLoc.push([i + y, j + x]);
        gameBoard[i + y][j + x].texture =
          textures[pieces[piece][rotation][i][j]];
      }
    }
  }
  pieceRotation = rotation;
  pieceValue = piece;
  piecePos = [x, y];
  console.log(piecePos);
  return true;
}

//Rotate the current piece
//rotation : int -> value to rotate the piece by with 1 being 90°, 2 being 180°, and 3 being 270°
function rotatePiece(rotation) {
  if (piecePos != null) {
    renderPiece(
      piecePos[0],
      piecePos[1],
      pieceValue,
      (rotation + pieceRotation) % 4
    );
  }
}
function movePieceRight() {
  if (piecePos != null) {
    renderPiece(piecePos[0] + 1, piecePos[1], pieceValue, pieceRotation);
  }
}
function movePieceLeft() {
  if (piecePos != null) {
    renderPiece(piecePos[0] - 1, piecePos[1], pieceValue, pieceRotation);
  }
}
function movePieceDown() {
  if (piecePos != null) {
    return renderPiece(piecePos[0], piecePos[1] + 1, pieceValue, pieceRotation);
  }
}
//Initialize the piece
//piece : string -> Piece to initialize
function initializePiece(piece) {
  const pieceStartLoc = { 2: 5, 3: 4, 4: 4 };
  renderPiece(pieceStartLoc[pieces[piece][0].length], 0, piece, 0);
}
function softDrop() {
  while (movePieceDown()) {}
}
function hardDrop() {
  softDrop();
  placePiece();
}
function placePiece() {
  //Check the lines that the piece is placed for cleared lines
  console.log(piecePos);
  for (
    let i = piecePos[1];
    i < pieces[pieceValue][0].length + piecePos[1];
    i++
  ) {
    isClearedLine = true;
    if (i >= 21) {
      break;
    }

    for (let j = 1; j <= 10; j++) {
      if (gameBoard[i][j].texture == textures["N"]) {
        isClearedLine = false;
        break;
      }
    }
    //Clear the line
    if (isClearedLine) {
      for (let line = i; line >= 1; line--) {
        for (let j = 1; j <= 10; j++) {
          if (line == 1) {
            gameBoard[line][j].texture = textures["N"];
          } else {
            gameBoard[line][j].texture =
              textures[gameBoard[line - 1][j].texture.baseTexture.cacheId[15]]; //Very jank solution potentially need another
          }
        }
      }
    }
  }
  piecePos = null;
  pieceValue = "";
  pieceRotation = 0;
  piecesLoc = [];
}
function keysDown(e) {
  console.log(e.keyCode);

  if (e.keyCode == 68) {
    hardDrop();
  }
  if (e.keyCode == 87) {
    rotatePiece(3);
  }
  if (e.keyCode == 81) {
    rotatePiece(2);
  }
  if (e.keyCode == 37) {
    movePieceLeft();
  }
  if (e.keyCode == 39) {
    movePieceRight();
  }
  if (e.keyCode == 40) {
    softDrop();
  }
  if (e.keyCode == 38) {
    rotatePiece(1);
  }
}

window.addEventListener("keydown", keysDown);

document.body.appendChild(app.view);
