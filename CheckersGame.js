
// What an initial checkers game board should look like
const  NewGameboard = [
    ["red", null, "red", null, "red", null, "red", null],
    [null, "red", null, "red", null, "red", null, "red"],
    ["red", null, "red", null, "red", null, "red", null],
    [null, "empty", null, "empty", null, "empty", null, "empty"],
    ["empty", null, "empty", null, "empty", null, "empty", null],
    [null, "black", null, "black", null, "black", null, "black"],
    ["black", null, "black", null, "black", null, "black", null],
    [null, "black", null, "black", null, "black", null, "black"]
  ];

function createNewGame() {
    // Returns NewGameBoard
    return NewGameboard
}


function validBoard(board){
    // SHOULD HAVE 32 NULL SQUARES
    let num = 0;
    board.forEach(row=>{
        row.forEach(square=>{
            if(square === null){
                console.log(square)
                num++
            }
        })
    })
    return num
}


function selectPieceToMove(board, playerTurn, pieceRow, pieceCol){
    if(playerTurn === 'black'){
)
    }
}