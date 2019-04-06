# Checkers Library

<a href='https://travis-ci.org/KimjManansala/Checkers-Library/'><img src='https://travis-ci.org/KimjManansala/Checkers-Library.svg?branch=master' alt="build status"></a>
<a href="https://badge.fury.io/js/checkerslibrary"><img src="https://badge.fury.io/js/checkerslibrary.svg" alt="npm version" height="18"></a>

This is a project to implement the game logic for the classic game
[Checkers]

## Development Setup

Install, then from this directory:

```sh
# install node_modules
npm install

# run the test suite
npm test
```

## API Documentation

### The Checkers Library will have functions displayed below

- [`createNewGame()`](#c4createNewGame)
- [`validBoard()`](#c4validBoard)
- [`selectPieceToMove()`](#c4selectPieceToMove)
- [`checkRedwinner()`](#c4checkRedwinner)
- [`checkBlackWinner()`](#c4checkBlackWinner)
- [`checkValidAmount()`](#c4checkValidAmount)

### board Array

The Checkers board is represented as a 8x8 Array of Arrays (rows / columns).
Each element in the Array is either `null`, `empty`, `black`,`blackking`, `red`, `redking`, or `possible`,`.

#### <a name='c4createNewGame'></a>`createNewGame()`

This method returns a new game array. A square with an invalid placement is
represented with `null`, all piece are represented with their corresponding
piece color, and all empty valid piece is represented with `empty`.
So a new Board looks like this in JSON

```json
[
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "red", null, "red", null, "red", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "empty", null],
  [null, "black", null, "black", null, "black", null, "black"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
]
```

#### <a name='c4validBoard'></a>`validBoard()`

This method returns a boolean. It will check if the current board is valid

- If board does not have 32 `null` pieces:
  - `false`
- If board length is not 8:
  - `false`
    - `false`
- If each board row length is not 8:
  - `false`
- If all checks pass:
  - `true`

#### <a name='c4selectPieeToMove'></a>`selectPieeToMove()`

This method will return a new board with `possible` places a selected piece can go

```json
const firstMove = [
    ["red", null, "red", null, "red", null, "red", null],
    [null, "red", null, "red", null, "red", null, "red"],
    ["red", null, "red", null, "red", null, "red", null],
    [null, "empty", null, "empty", null, "empty", null, "empty"],
    ["empty", null, "empty", null, "empty", null, "empty", null],
    [null, "black", null, "black", null, "black", null, "black"],
    ["black", null, "black", null, "black", null, "black", null],
    [null, "black", null, "black", null, "black", null, "black"]
  ];
selectPieceToMove(firstMove, 'black', 5,1)
```

Will return

```json
[
    ["red", null, "red", null, "red", null, "red", null],
    [null, "red", null, "red", null, "red", null, "red"],
    ["red", null, "red", null, "red", null, "red", null],
    [null, "empty", null, "empty", null, "empty", null, "empty"],
    ["possible", null, "possible", null, "empty", null, "empty", null],
    [null, "blackmoving", null, "black", null, "black", null, "black"],
    ["black", null, "black", null, "black", null, "black", null],
    [null, "black", null, "black", null, "black", null, "black"]
  ];

```

## License

[ISC License]

[checkers]: https://en.wikipedia.org/wiki/Draughts
[npm]: https://www.npmjs.com/package/checkerslibrary
[isc license]: LICENSE.md
