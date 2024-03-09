/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function Square({
  value,
  onSquareClick
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "square",
    onClick: onSquareClick
  }, value);
}
function Board({
  xIsNext,
  squares,
  onPlay
}) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "status"
  }, status), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "board-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Square, {
    value: squares[0],
    onSquareClick: () => handleClick(0)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Square, {
    value: squares[1],
    onSquareClick: () => handleClick(1)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Square, {
    value: squares[2],
    onSquareClick: () => handleClick(2)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "board-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Square, {
    value: squares[3],
    onSquareClick: () => handleClick(3)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Square, {
    value: squares[4],
    onSquareClick: () => handleClick(4)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Square, {
    value: squares[5],
    onSquareClick: () => handleClick(5)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "board-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Square, {
    value: squares[6],
    onSquareClick: () => handleClick(6)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Square, {
    value: squares[7],
    onSquareClick: () => handleClick(7)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Square, {
    value: squares[8],
    onSquareClick: () => handleClick(8)
  })));
}
function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
function Game() {
  const [history, setHistory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: move
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => jumpTo(move)
    }, description));
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "game"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "game-board"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Board, {
    xIsNext: xIsNext,
    squares: currentSquares,
    onPlay: handlePlay
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "game-info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", null, moves)));
}
const domNode = document.getElementById("btdev_inscriere_edit_form");
const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(domNode);
root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Game, null));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map