function deepCopy(x) {
  return JSON.parse(JSON.stringify(x));
}

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
  return [
    ["red", null, "red", null, "red", null, "red", null],
    [null, "red", null, "red", null, "red", null, "red"],
    ["red", null, "red", null, "red", null, "red", null],
    [null, "empty", null, "empty", null, "empty", null, "empty"],
    ["empty", null, "empty", null, "empty", null, "empty", null],
    [null, "black", null, "black", null, "black", null, "black"],
    ["black", null, "black", null, "black", null, "black", null],
    [null, "black", null, "black", null, "black", null, "black"]
  ];
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CHECKS FOR IF BOARD HAS VALID AMOUNTS OF EMPTY SQUARES
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function validNullSquares(board) {
  // SHOULD HAVE 32 NULL SQUARES
  let num = 0;
  board.forEach(row => {
    row.forEach(square => {
      if (square === null) {
        num++;
      }
    });
  });
  return num;
}
function validBoard(board) {
  if (validNullSquares(board) !== 32) {
    return false;
  }
  if (board.length !== 8) {
    return false;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i].length !== 8) return false;
    }
  }
  return true;
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
function selectPieceToMove(oldboard, playerTurn, pieceRow, pieceCol) {
  let board = deepCopy(oldboard);
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
  if (validBoard(board) === false) {
    return false;
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
    if (board[row + rowMove][col + colMove] === "empty") {
      board[row + rowMove][col + colMove] = "possible";
      return true;
    } else {
      return false;
    }
  } else {
    return false;
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
        return {
          row: i,
          col: j,
          pieceName: board[i][j].substring(0, board[i][j].indexOf("moving"))
        };
      } else {
      }
    }
  }
}
function capturePiece(board, row, col, currentPlayer) {
  let ogPiece = getOg(board);
  //   let pieceToMove = ogPiece.pieceName;
  if (ogPiece.row - row === -2) {
    return getCol(board, row - 1, col, ogPiece.col, ogPiece);
  } else if (ogPiece.row - row === 2) {
    return getCol(board, row + 1, col, ogPiece.col, ogPiece);
  }
}
function getCol(board, row, col, ogCol, ogObj) {
  if (ogCol - col === 2) {
    board[row][col + 1] = "empty";
    return true;
  } else if (ogCol - col === -2) {
    board[row][col - 1] = "empty";
    return true;
  }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Multi Capture
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function multiCapture(board, row, col) {
  let check1, check2, check3, check4;
  let currentPlayer = "";
  if (board[row][col] === "red" || board[row][col] === "redking") {
    currentPlayer = "red";
  } else {
    currentPlayer = "black";
  }
  if (board[row + 1]) {
    if (board[row + 1][col + 1] === "empty") null;
    else {
      check1 = checkPieceCapture(board, 1, 1, row + 1, col + 1, currentPlayer);
    }
    if (board[row + 1][col - 1] === "empty") null;
    else {
      check2 = checkPieceCapture(board, 1, -1, row + 1, col - 1, currentPlayer);
    }
  }
  if (board[row - 1]) {
    if (board[row - 1][col + 1] === "empty") null;
    else {
      check3 = checkPieceCapture(board, -1, 1, row - 1, col + 1, currentPlayer);
    }
    if (board[row - 1][col - 1] === "empty") null;
    else {
      check4 = checkPieceCapture(
        board,
        -1,
        -1,
        row - 1,
        col - 1,
        currentPlayer
      );
    }
  }
  if (check1 || check2 || check3 || check4) {
    board[row][col] = board[row][col] + "moving";
  } else {
    
  }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// MOVE TO POSSIBLE
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function moveToHighLight(oldBoard, row, col) {
  let board = deepCopy(oldBoard);
  if (board[row][col] === "possible") {
    let ogPiece = getOg(board);
    let bool = capturePiece(board, row, col);

    if (row === 0 && ogPiece.pieceName === "black") {
      board[row][col] = "blackking";
    } else if (row === 7 && ogPiece.pieceName === "red") {
      board[row][col] = "redking";
    } else {
      board[row][col] = ogPiece.pieceName;
    }
    board[ogPiece.row][ogPiece.col] = "empty";
    removePossible(board);

    if (bool) {
      multiCapture(board, row, col);
    }
    return board;
  } else {
    return board;
  }
}
function removePossible(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "possible") board[i][j] = "empty";
    }
  }
  return board;
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

module.exports = {
  createNewGame: createNewGame,
  validBoard: validBoard,
  selectPieceToMove: selectPieceToMove,
  moveToHighLight: moveToHighLight,
  checkRedWinner: checkRedWinner,
  checkBlackWinner: checkBlackWinner,
  checkValidAmount: checkValidAmount
};

blackCapture = [
  ["red", null, "empty", null, "red", null, "empty", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "red", null, "possible", null, "red", null],
  [null, "possible", null, "red", null, "red", null, "empty"],
  ["empty", null, "blackmoving", null, "empty", null, "empty", null],
  [null, "empty", null, "black", null, "black", null, "empty"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
let newBoard = moveToHighLight(blackCapture, 2, 4);

// console.log(newBoard);
// console.log("---------");
// console.log(
moveToHighLight(newBoard, 0, 2);
// );
