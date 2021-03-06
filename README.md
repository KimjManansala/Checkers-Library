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
- [`moveToPossible()`](#c4moveTopossible)
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
- If any board row length is not 8:
  - `false`
- If all checks pass:
  - `true`

#### <a name='c4selectPieceToMove'></a>`selectPieceToMove()`

This method will return a new array with `possible` places a selected piece can go.
The method takes in arguments current board, player turns, either `'black'` or `'red'`, row of piece to move, and column of piece to move

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
  ]
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
]
```

Another Example

```json
const blackPieceWillCapture = [
    ["red", null, "red", null, "red", null, "red", null],
    [null, "red", null, "red", null, "red", null, "red"],
    ["red", null, "red", null, "empty", null, "red", null],
    [null, "empty", null, "red", null, "empty", null, "empty"],
    ["empty", null, "black", null, "empty", null, "black", null],
    [null, "empty", null, "black", null, "black", null, "empty"],
    ["black", null, "black", null, "black", null, "black", null],
    [null, "black", null, "black", null, "black", null, "black"]
  ]
selectPieceToMove(blackPieceWillCapture, 'black', 4,2)
```

Will Return

```json
[
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "red", null, "possible", null, "red", null],
  [null, "possible", null, "red", null, "empty", null, "empty"],
  ["empty", null, "blackmoving", null, "empty", null, "black", null],
  [null, "empty", null, "black", null, "black", null, "empty"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
]
```

#### <a name='c4moveToPossible'></a>`moveToPossible()`

This method will return a new array with the moved piece to the `'possible'` location selected. The method takes in arguments current board, row of `'possible'` piece selected, and column of `'possible'` piece selected

```json
const boardWithPossible = [
    ["red", null, "red", null, "red", null, "red", null],
    [null, "red", null, "red", null, "red", null, "red"],
    ["red", null, "red", null, "red", null, "red", null],
    [null, "empty", null, "empty", null, "empty", null, "empty"],
    ["possible", null, "possible", null, "empty", null, "empty", null],
    [null, "blackmoving", null, "black", null, "black", null, "black"],
    ["black", null, "black", null, "black", null, "black", null],
    [null, "black", null, "black", null, "black", null, "black"]
  ]
  moveToPossible(boardWithPossible, 4,0)
```

Will return

```json
[
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "red", null, "red", null, "red", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["black", null, "empty", null, "empty", null, "empty", null],
  [null, "empty", null, "black", null, "black", null, "black"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
]
```

Another Example

```json
const boardWithPossible = [
    ["red", null, "red", null, "red", null, "red", null],
    [null, "red", null, "red", null, "red", null, "red"],
    ["red", null, "red", null, "possible", null, "red", null],
    [null, "possible", null, "red", null, "empty", null, "empty"],
    ["empty", null, "blackmoving", null, "empty", null, "black", null],
    [null, "empty", null, "black", null, "black", null, "empty"],
    ["black", null, "black", null, "black", null, "black", null],
    [null, "black", null, "black", null, "black", null, "black"]
  ]
  moveToPossible(boardWithPossible, 2,4)
```

Will return

```json
[
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "red", null, "black", null, "red", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "black", null],
  [null, "empty", null, "black", null, "black", null, "empty"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
]
```

#### <a name='c4checkRedWinner'></a>`checkRedWinner()`

This method returns a boolean. It will check if red is the winner

```json
const redWinningBoard=
    [
  ["empty", null, "empty", null, "empty", null, "empty", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "red", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "redking", null, "empty", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "empty", null],
  [null, "redking", null, "empty", null, "empty", null, "empty"]
]
```
```json

console.log(checkRedWinner(redWinningBoard)) //true
```

#### <a name='c4checkBlackWinner'></a>`checkBlackWinner()`

This method returns a boolean. It will check if black is the winner

```json
const blackWinningBoard=
    [
  ["empty", null, "empty", null, "empty", null, "empty", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "black", null, "empty", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "blackking", null, "empty", null, "empty", null],
  [null, "empty", null, "empty", null, "empty", null, "blackking"],
  ["empty", null, "empty", null, "empty", null, "empty", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"]
]
```
```json

console.log(checkBlackWinner(blackWinningBoard)) //true
```


#### <a name='c4checkValidAmount'></a>`checkValidAmount()`

This method returns a boolean. It will check if there is no more than 13 of red pieces and black piece

```json
const normalBoard=
    [
  ["redking", null, "black", null, "black", null, "empty", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "blackking", null, "empty", null, "empty", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "empty", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "empty", null],
  [null, "red", null, "red", null, "red", null, "empty"]
]
```
```json
console.log(checkValidAmount(normalBoard)) //true
```

## License

[ISC License]

[checkers]: https://en.wikipedia.org/wiki/Draughts
[npm]: https://www.npmjs.com/package/checkerslibrary
[isc license]: LICENSE.md
