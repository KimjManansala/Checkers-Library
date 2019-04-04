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
      pieceMove(board, pieceRow, pieceCol, -1, "black");
    else if (board[pieceRow][pieceCol] === "blackking")
      kingPieceMove(board, pieceRow, pieceCol, "black");
  } else {
    if (board[pieceRow][pieceCol] === "red")
      pieceMove(board, pieceRow, pieceCol, 1, "red");
    else if (board[pieceRow][pieceCol] === "redking")
      kingPieceMove(board, pieceRow, pieceCol), "red";
  }
  return board;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// FOR PIECE MOVEMENT
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function pieceMove(board, row, col, moveMent, currentPlayer) {
  board[row][col] = board[row][col] + "moving";
  if (board[row + moveMent]) {
    if (board[row + moveMent][col + 1] === "empty")
      board[row + moveMent][col + 1] = "possible";
    else checkPieceCapture(board, moveMent, 1, row, col, currentPlayer);
    if (board[row + moveMent][col - 1] === "empty")
      board[row + moveMent][col - 1] = "possible";
    else checkPieceCapture(board, moveMent, -1, row, col, currentPlayer);
  }
}
function kingPieceMove(board, row, col, currentPlayer) {
  board[row][col] = board[row][col] + "moving";
  if (board[row + 1]) {
    if (board[row + 1][col + 1] === "empty")
      board[row + 1][col + 1] = "possible";
    else checkPieceCapture(board, 1, 1, row, col, currentPlayer);
    if (board[row + 1][col - 1] === "empty")
      board[row + 1][col - 1] = "possible";
    checkPieceCapture(board, 1, -1, row, col, currentPlayer);
  }
  if (board[row - 1]) {
    if (board[row - 1][col + 1] === "empty")
      board[row - 1][col + 1] = "possible";
    else checkPieceCapture(board, -1, 1, row, col, currentPlayer);
    if (board[row - 1][col - 1] === "empty")
      board[row - 1][col - 1] = "possible";
    else checkPieceCapture(board, -1, -1, row, col, currentPlayer);
  }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// FOR CHECKS TO CAPTURE
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function checkPieceCapture(board, rowMove, colMove, row, col, currentPlayer) {
  let capturePiece1 = currentPlayer === "black" ? "red" : "black";
  let capturePiece2 = currentPlayer === "black" ? "redking" : "blackking";
  if (board[row][col] === capturePiece1 || board[row][col] === capturePiece2) {
    if (board[row + rowMove][col + colMove] === "empty")
      board[row + rowMove][col + colMove] = "possible";
  }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CAPTURE PIECE
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getOg(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        board[i][j] === "redmoving" ||
        board[i][j] === "redkingmoving" ||
        board[i][j] === "blackmoving" ||
        board[i][j] === "blackkingmoving"
      ) {
        console.log("");
        return {
          row: i,
          col: j,
          pieceName: board[i][j].substring(0, board[i][j].indexOf("moving"))
        };
      }
    }
  }
}
function capturePiece(board, row, col, currentPlayer) {
  let ogPiece = getOg(board);
  let pieceToMove = ogPiece.pieceName;
  if (ogPiece.row - row === -2) {
    getCol(board, row + 1, col, ogPiece.col);
  } else if (ogPiece.row - row === 2) {
    getCol(board, row - 1, col, ogPiece.col);
  }
}
function getCol(board, row, col, ogCol) {
  if (ogCol - col === 2) {
    board[row][col - 1] === "empty";
  } else if (ogCol - col === -2) {
    board[row][col + 1] === "empty";
  }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Multi Capture
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// MOVE TO POSSIBLE
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function moveToHighLight(board, row, col) {
  if (board[row][col] === "possible") {
    capturePiece(board, row, col);
    let ogPiece = getOg(board);
    board[ogPiece.row][ogPiece.col] = "empty";
    if (row === 0 && ogPiece.pieceName === "black") {
      board[row][col] = "blackking";
    } else if (row === 7 && ogPiece.pieceName === "red") {
      board[row][col] = "redking";
    } else {
      board[row][col] = ogPiece.pieceName;
    }
  }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CHECK PLAYERS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function checkRedWinner(board) {
  let red = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "red" || board[i][j] === "redking") {
        red++;
      }
    }
  }
  if (red === 0) return true;
  else return false;
}
function checkBlackWinner(board) {
  let black = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "black" || board[i][j] === "blackking") {
        black++;
      }
    }
  }
  if (black === 0) return true;
  else return false;
}
function checkValidAmount(board) {
  let red = 0;
  let black = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "black" || board[i][j] === "blackking") {
        black++;
      } else if (board[i][j] === "red" || board[i][j] === "redking") {
        red++;
      }
    }
  }
  if (red < 13 && black < 13) {
    return true;
  } else {
    return false;
  }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let movingBoard = selectPieceToMove(NewGameboard, "black", 5, 1);
console.log(movingBoard);
console.log(getOg(movingBoard));
