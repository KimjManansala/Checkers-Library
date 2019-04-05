var checkers = require("../CheckersGame");
var expect = require("chai").expect;
// var assert = require('assert')
var assert = require("chai").assert;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// TEST BOARD
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const newGameBoard = [
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "red", null, "red", null, "red", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "empty", null],
  [null, "black", null, "black", null, "black", null, "black"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
// 5-1 CLICKED
const blackClick = [
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "red", null, "red", null, "red", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["possible", null, "possible", null, "empty", null, "empty", null],
  [null, "blackmoving", null, "black", null, "black", null, "black"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
// 4-0 clicked
const blackPosCllick = [
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "red", null, "red", null, "red", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["black", null, "empty", null, "empty", null, "empty", null],
  [null, "empty", null, "black", null, "black", null, "black"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
// 2-2 clicked
const redClick = [
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "redmoving", null, "red", null, "red", null],
  [null, "possible", null, "possible", null, "empty", null, "empty"],
  ["black", null, "empty", null, "empty", null, "empty", null],
  [null, "empty", null, "black", null, "black", null, "black"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
// 3-1 clicked
const redPosClick = [
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "empty", null, "red", null, "red", null],
  [null, "red", null, "empty", null, "empty", null, "empty"],
  ["black", null, "empty", null, "empty", null, "empty", null],
  [null, "empty", null, "black", null, "black", null, "black"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];

// 5-7 clicked
const blackMove2 = [
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "red", null, "red", null, "red", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "possible", null],
  [null, "black", null, "black", null, "black", null, "blackmoving"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
// 4-6 clicked
const blackPosClick2 = [
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "red", null, "red", null, "red", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "black", null],
  [null, "black", null, "black", null, "black", null, "empty"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
// 2-0
const redMove2 = [
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["redmoving", null, "red", null, "red", null, "red", null],
  [null, "possible", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "empty", null],
  [null, "black", null, "black", null, "black", null, "black"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
// 3-1 clickd
const redPosClick2 = [
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["empty", null, "red", null, "red", null, "red", null],
  [null, "red", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "empty", null],
  [null, "black", null, "black", null, "black", null, "black"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];

// Red will capture 4-2 from 3-3
const redCaptire = [
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "red", null, "empy", null, "red", null],
  [null, "empty", null, "red", null, "empty", null, "empty"],
  ["empty", null, "black", null, "empty", null, "black", null],
  [null, "empty", null, "black", null, "black", null, "empty"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
// Black will capture 3-3 from 4-2
const blackCapture = [
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "red", null, "possible", null, "red", null],
  [null, "possible", null, "red", null, "empty", null, "empty"],
  ["empty", null, "blackmoving", null, "empty", null, "black", null],
  [null, "empty", null, "black", null, "black", null, "empty"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
// 2-4 clicked
const blackDidCapture = [
  ["red", null, "red", null, "red", null, "red", null],
  [null, "red", null, "red", null, "red", null, "red"],
  ["red", null, "red", null, "black", null, "red", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "black", null],
  [null, "empty", null, "black", null, "black", null, "empty"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];

// King black
const blackKing = [
  ["red", null, "red", null, "empty", null, "red", null],
  [null, "red", null, "black", null, "red", null, "red"],
  ["red", null, "red", null, "empy", null, "red", null],
  [null, "empty", null, "red", null, "empty", null, "empty"],
  ["empty", null, "black", null, "empty", null, "black", null],
  [null, "empty", null, "black", null, "black", null, "empty"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];

const redKing = [
  ["red", null, "red", null, "empty", null, "red", null],
  [null, "red", null, "black", null, "red", null, "red"],
  ["red", null, "red", null, "empy", null, "red", null],
  [null, "empty", null, "red", null, "empty", null, "empty"],
  ["empty", null, "black", null, "empty", null, "black", null],
  [null, "empty", null, "black", null, "black", null, "empty"],
  ["black", null, "red", null, "black", null, "black", null],
  [null, "empty", null, "empty", null, "black", null, "black"]
];
const blackkingMove = [
  ["red", null, "red", null, "blackking", null, "red", null],
  [null, "red", null, "empty", null, "empty", null, "red"],
  ["red", null, "red", null, "blackking", null, "red", null],
  [null, "empty", null, "empty", null, "empty", null, "empty"],
  ["empty", null, "black", null, "empty", null, "black", null],
  [null, "empty", null, "black", null, "black", null, "empty"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
const redkingMove = [
  ["red", null, "red", null, "empty", null, "red", null],
  [null, "red", null, "black", null, "red", null, "red"],
  ["red", null, "empty", null, "empy", null, "red", null],
  [null, "empty", null, "redking", null, "empty", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "black", null],
  [null, "empty", null, "black", null, "black", null, "empty"],
  ["black", null, "empty", null, "black", null, "black", null],
  [null, "redking", null, "empty", null, "black", null, "black"]
];
const blackkingCapture = [
  ["red", null, "empty", null, "blackking", null, "empty", null],
  [null, "red", null, "redking", null, "red", null, "red"],
  ["red", null, "red", null, "blackking", null, "red", null],
  [null, "empty", null, "redking", null, "red", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "empty", null],
  [null, "empty", null, "black", null, "black", null, "empty"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
const redkingCapture = [
  ["red", null, "empty", null, "blackking", null, "empty", null],
  [null, "red", null, "blackking", null, "black", null, "red"],
  ["red", null, "red", null, "redking", null, "red", null],
  [null, "empty", null, "blackking", null, "black", null, "empty"],
  ["empty", null, "empty", null, "empty", null, "empty", null],
  [null, "empty", null, "black", null, "black", null, "empty"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
const blackkingCapturePos = [
  ["red", null, "possible", null, "blackking", null, "possible", null],
  [null, "red", null, "redking", null, "red", null, "red"],
  ["red", null, "red", null, "blackking", null, "red", null],
  [null, "empty", null, "redking", null, "red", null, "empty"],
  ["empty", null, "possible", null, "empty", null, "possible", null],
  [null, "empty", null, "black", null, "black", null, "empty"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
const redkingCapturePos = [
  ["red", null, "possible", null, "blackking", null, "possible", null],
  [null, "red", null, "blackking", null, "black", null, "red"],
  ["red", null, "red", null, "redking", null, "red", null],
  [null, "empty", null, "blackking", null, "black", null, "empty"],
  ["empty", null, "possible", null, "empty", null, "possible", null],
  [null, "empty", null, "black", null, "black", null, "empty"],
  ["black", null, "black", null, "black", null, "black", null],
  [null, "black", null, "black", null, "black", null, "black"]
];
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
describe("#Checking valid game", () => {
  context("Create a new game", () => {
    it("Should be a valid board", () => {
      assert.strictEqual(
        checkers.validBoard(redkingCapturePos),
        true,
        "Board has correct ammount of empty boards and length"
      );
    });
    it("Should be an array", () => {
      assert.isArray(checkers.createNewGame(), "Valid array");
    });
    it("Should be a new game board", () => {
      expect(checkers.createNewGame()).to.eql(newGameBoard);
    });
  });
});
describe("#Player click piece", () => {
  context("Black Piece selecting to move", () => {
    it("Should be blackmoving at 5-1 and possible at 4-0 and 4-2", () => {
      let newMove = checkers.selectPieceToMove(newGameBoard, "black", 5, 1);
      expect(newMove).to.eql(blackClick);
    });
    it("Should be blackmoving at 5-7 and possible at 4-6", () => {
      expect(checkers.selectPieceToMove(newGameBoard, "black", 5, 7)).to.eql(
        blackMove2
      );
    });
  });
  context("Red Piece selecting to move", () => {
    it("Should be redmoving at 2-2 and possible 3-1 and 3-3", () => {
      expect(
        checkers.selectPieceToMove(
          [
            ["red", null, "red", null, "red", null, "red", null],
            [null, "red", null, "red", null, "red", null, "red"],
            ["red", null, "red", null, "red", null, "red", null],
            [null, "empty", null, "empty", null, "empty", null, "empty"],
            ["black", null, "empty", null, "empty", null, "empty", null],
            [null, "empty", null, "black", null, "black", null, "black"],
            ["black", null, "black", null, "black", null, "black", null],
            [null, "black", null, "black", null, "black", null, "black"]
          ],
          "red",
          2,
          2
        )
      ).to.eql(redClick);
    });
    it("Should be redmoving at 2-0, and possible at 3-1", () => {
      let game = newGameBoard;
      expect(checkers.selectPieceToMove(game, "red", 2, 0)).to.eql(redMove2);
    });
  });
  it("Should be false if possible moves are present", () => {
    assert.strictEqual(
      checkers.selectPieceToMove(redMove2, "red", 2, 2),
      false,
      "Board has possible moves present"
    );
  });
});

describe("#Player selects possbile move", () => {
  context("Black piece will move to possible place", () => {
    it("Should be black at 4-0", () => {
      expect(checkers.moveToHighLight(blackClick, 4, 0)).to.eql(blackPosCllick);
    });
    it("Should be black at 4-6", () => {
      expect(checkers.moveToHighLight(blackMove2, 4, 6)).to.eql(blackPosClick2);
    });
  });
  context("Red piece will move to possile place", () => {
    it("Should be red at 3-1", () => {
      expect(checkers.moveToHighLight(redClick, 3, 1)).to.eql(redPosClick);
    });
    it("Should be red at 3-1", () => {
      expect(checkers.moveToHighLight(redMove2, 3, 1)).to.eql(redPosClick2);
    });
  });
  context("Black piece will capture a red piece", () => {
      it('Should capture 3-3 from 4-2 and be black at 2-4', ()=>{
      expect(checkers.moveToHighLight(blackCapture, 2, 4)).to.eql(blackDidCapture)
    })
  });
});
