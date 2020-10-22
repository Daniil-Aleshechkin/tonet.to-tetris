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

document.body.appendChild(app.view);
