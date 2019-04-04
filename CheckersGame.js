// What an initial checkers game board should look like
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const NewGameboard = [
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "red", null, "red", null, "red", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "empty", null],
  [null, "black", null, "black", null, "black", null, "black"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CREATES A NEW GAME
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function createNewGame() {
  // Returns NewGameBoard
  return NewGameboard;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CHECKS FOR IF BOARD HAS VALID AMOUNTS OF EMPTY SQUARES
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function validBoard(board) {
  // SHOULD HAVE 32 NULL SQUARES
  let num = 0;
  board.forEach(row => {
    row.forEach(square => {
      if (square === null) {
        console.log(square);
        num++;
      }
    });
  });
  return num;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CHECKS IF POSSIBLE IS ON BOARD
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function ifPossibleShown(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "possible") return true;
    }
  }
  return false;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// FUNCTION TO RETURN BOARD WITH POSSIBLE MOVES TO SELECTED PIECE
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function selectPieceToMove(board, playerTurn, pieceRow, pieceCol) {
  if (ifPossibleShown(board)) return false;
  if (playerTurn === "black") {
    if (board[pieceRow][pieceCol] === "black")
      pieceMove(board, pieceRow, pieceCol, -1, 'black');
    else if (board[pieceRow][pieceCol] === "blackking")
      kingPieceMove(board, pieceRow, pieceCol, 'black');
  } else {
    if (board[pieceRow][pieceCol] === "red")
      pieceMove(board, pieceRow, pieceCol, 1, 'red');
    else if (board[pieceRow][pieceCol] === "redking")
      kingPieceMove(board, pieceRow, pieceCol), 'red';
  }
  return board;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// FOR PIECE MOVEMENT
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function pieceMove(board, row, col, moveMent, currentPlayer) {
  if (board[row + moveMent]) {
    if (board[row + moveMent][col + 1] === "empty")
      board[row + moveMent][col + 1] = "possible";
    if (board[row + moveMent][col - 1] === "empty")
      board[row + moveMent][col - 1] = "possible";
  }
}
function kingPieceMove(board, row, col, currentPlayer) {
  if (board[row + 1]) {
    if (board[row + 1][col + 1] === "empty")
      board[row + 1][col + 1] = "possible";
    if (board[row + 1][col - 1] === "empty")
      board[row + 1][col - 1] = "possible";
  }
  if (board[row - 1]) {
    if (board[row - 1][col + 1] === "empty")
      board[row - 1][col + 1] = "possible";
    if (board[row - 1][col - 1] === "empty")
      board[row - 1][col - 1] = "possible";
  }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// FOR CHECKS TO CAPTURE
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function checkCapture(){

}