//Piece Textures
const textures = {"I": PIXI.Texture.from("/assets/blocks/I.png"),
                "L": PIXI.Texture.from("/assets/blocks/L.png"),
                "J": PIXI.Texture.from("/assets/blocks/J.png"),
                "O": PIXI.Texture.from("/assets/blocks/O.png"),
                "S": PIXI.Texture.from("/assets/blocks/S.png"),
                "T": PIXI.Texture.from("/assets/blocks/T.png"),
                "Z": PIXI.Texture.from("/assets/blocks/Z.png"),
                "N": PIXI.Texture.from("/assets/blocks/N.png")}
const app = new PIXI.Application({width: 300, height: 600})
//Piece definitions including rotations
const pieces = {"O":[[
                        ["O","O"],
                        ["O","O"]
                    ],
                    [
                        ["O","O"],
                        ["O","O"]
                    ],
                    [
                        ["O","O"],
                        ["O","O"]
                    ],
                    [
                        ["O","O"],
                        ["O","O"]
                    ]],
                
                "I":[[
                        ["N","N","N","N"],
                        ["I","I","I","I"],
                        ["N","N","N","N"],
                        ["N","N","N","N"]
                    ],
                    [
                        ["N","N","I","N"],
                        ["N","N","I","N"],
                        ["N","N","I","N"],
                        ["N","N","I","N"]
                    ],
                    [
                        ["N","N","N","N"],
                        ["N","N","N","N"],
                        ["I","I","I","I"],
                        ["N","N","N","N"]
                    ],
                    [
                        ["N","I","N","N"],
                        ["N","I","N","N"],
                        ["N","I","N","N"],
                        ["N","I","N","N"]
                    ]],
                
                "Z":[[
                        ["Z","Z","N"],
                        ["N","Z","Z"],
                        ["N","N","N"]
                    ],
                    [
                        ["N","N","Z"],
                        ["N","Z","Z"],
                        ["N","Z","N"]
                    ],
                    [
                        ["N","N","N"],
                        ["Z","Z","N"],
                        ["N","Z","Z"]
                    ],
                    [
                        ["N","Z","N"],
                        ["Z","Z","N"],
                        ["Z","N","N"]
                    ]],
                
                "S":[[
                        ["N","S","S"],
                        ["S","S","N"],
                        ["N","N","N"]
                    ],
                    [
                        ["N","S","N"],
                        ["N","S","S"],
                        ["N","N","S"]
                    ],
                    [
                        ["N","N","N"],
                        ["N","S","S"],
                        ["S","S","N"]
                    ],
                    [
                        ["S","N","N"],
                        ["S","S","N"],
                        ["N","S","N"]
                    ]],

                "T":[[
                        ["N","T","N"],
                        ["T","T","T"],
                        ["N","N","N"]
                    ],
                    [
                        ["N","T","N"],
                        ["N","T","T"],
                        ["N","T","N"]
                    ],
                    [
                        ["N","N","N"],
                        ["T","T","T"],
                        ["N","T","N"]
                    ],
                    [
                        ["N","T","N"],
                        ["T","T","N"],
                        ["N","T","N"]
                    ]],

                "L":[[
                        ["N","N","L"],
                        ["L","L","L"],
                        ["N","N","N"]
                    ],
                    [
                        ["N","L","N"],
                        ["N","L","N"],
                        ["N","L","L"]
                    ],
                    [
                        ["N","N","N"],
                        ["L","L","L"],
                        ["L","N","N"]
                    ],
                    [
                        ["L","L","N"],
                        ["N","L","N"],
                        ["N","L","N"]
                    ]],

                "J":[[
                        ["J","N","N"],
                        ["J","J","J"],
                        ["N","N","N"]
                    ],
                    [
                        ["N","J","J"],
                        ["N","J","N"],
                        ["N","J","N"]
                    ],
                    [
                        ["N","N","N"],
                        ["J","J","J"],
                        ["N","N","J"]
                    ],
                    [
                        ["N","J","N"],
                        ["N","J","N"],
                        ["J","J","N"]
                    ]]}

//Loaded board state
const boardState = [["N","N","N","N","N","N","N","N","N","N"],
                    ["N","N","N","N","N","N","N","N","N","N"],
                    ["N","N","N","N","N","N","N","N","N","N"],
                    ["N","N","N","N","N","N","N","N","N","N"],
                    ["N","N","N","N","N","N","N","N","N","N"],
                    ["N","N","N","N","N","N","N","N","N","N"],
                    ["N","N","N","N","N","N","N","N","N","N"],
                    ["N","N","N","I","N","I","N","N","N","N"],
                    ["N","N","N","N","N","N","N","N","N","N"],
                    ["N","N","N","N","O","N","N","N","N","N"],
                    ["N","N","N","N","N","N","N","N","N","N"],
                    ["N","N","Z","N","N","N","Z","N","N","N"],
                    ["N","N","N","Z","Z","Z","N","N","N","N"],
                    ["N","N","N","N","N","N","N","N","N","N"],
                    ["N","N","N","N","N","N","N","N","N","N"],
                    ["N","N","N","N","N","N","N","N","N","N"],
                    ["N","N","L","N","N","N","N","N","N","N"],
                    ["L","L","L","Z","N","S","S","N","N","J"],
                    ["O","O","Z","Z","S","S","N","N","N","J"],
                    ["O","O","Z","I","I","I","I","N","J","J"]]

//Initialize Board
let gameBoard = [];

for (i = 0; i<20;i++){
    let gameRow = [];
    for (j = 0;j<10;j++) {
        let block = new PIXI.Sprite(textures[boardState[i][j]])
        block.x = j*30
        block.y = i*30
        app.stage.addChild(block);
        gameRow.push(block);
    }
    gameBoard.push(gameRow);
}
let piecesLoc = [];
let piecePos = null;
let pieceRotation = 0;
let pieceValue = "";

//Delete current piece in board
function deletePiece(){
    if (piecesLoc!=[]){
        piecesLoc.forEach(loc =>{
            gameBoard[loc[0]][loc[1]].texture = textures["N"];
        })
        piecesLoc = [];
    }
}
//Initialize Piece
//x : int -> x location to render the piece in
//y : int -> y location to render the piece in
//piece : string -> Piece to be initilized
//rotation : int -> Rotation to render the piece in
function renderPiece(x,y,piece,rotation){
    if(piecesLoc!=[]) {
        deletePiece();
    }
    for(i=0;i<pieces[piece][0].length;i++){
        for(j=0;j<pieces[piece][0].length;j++){
            if(pieces[piece][rotation][i][j]!="N"){
                piecesLoc.push([i+y,j+x]);
                gameBoard[i+y][j+x].texture = textures[pieces[piece][rotation][i][j]];
            }
        }
    }
    pieceRotation = rotation;
    pieceValue = piece;
    piecePos = [x,y];
}
//Rotate the current piece
//rotation : int -> value to rotate the piece by with 1 being 90°, 2 being 180°, and 3 being 270°
function rotatePiece(rotation){
    if(piecePos != null) {
        renderPiece(piecePos[0],piecePos[1],pieceValue,(rotation+pieceRotation)%4);
    }
}
function movePieceRight() {
    if (piecePos != null) {
        renderPiece(piecePos[0]+1,piecePos[1],pieceValue,pieceRotation)
    }
}
function movePieceLeft() {
    if (piecePos != null) {
        renderPiece(piecePos[0]-1,piecePos[1],pieceValue,pieceRotation)
    }
}
function movePieceDown() {
    if (piecePos != null) {
        renderPiece(piecePos[0],piecePos[1]+1,pieceValue,pieceRotation)
    }

}
function initializePiece(piece) {
    const pieceStartLoc = {2:4,3:3,4:3}
    renderPiece(pieceStartLoc[pieces[piece][0].length],0,piece,0)
}

document.body.appendChild(app.view);
