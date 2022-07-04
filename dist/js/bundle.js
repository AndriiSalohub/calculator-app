/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculator() {
    let firstNumber = ""; // first number and result
    let secondNumber = ""; // second number
    let sign = "";
    let finish = false; // flag that indicates whether the arithmetic operation has ended

    const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    const action = ["-", "+", "x", "/"];

    const out = document.querySelector(".calc-screen p"); //value of calc-screen
    out.textContent = 0;

    function clearAll() {
        firstNumber = "";
        secondNumber = "";
        sight = "";
        finish = false;
        out.textContent = 0;
    }

    document.querySelector(".reset").addEventListener("click", clearAll); // clear calc-screen when user click on reset

    document.querySelector(".buttons").addEventListener("click", (e) => {
        // if user missed the button
        if (!e.target.classList.contains("btn")) {
            return;
        }

        // when user click on button
        if (e.target.classList.contains("reset")) {
            return;
        }

        if (e.target.classList.contains("delete")) {
            return;
        }

        out.textContent = "";

        // get clicked button
        const key = e.target.textContent;

        //check if clicked button is in digits array
        if (digit.includes(key)) {
            if (secondNumber === "" && sign === "") {
                firstNumber += key;
                out.textContent = firstNumber;
            } else if (firstNumber !== "" && secondNumber !== "" && finish) {
                secondNumber = key;
                finish = false;
                out.textContent = secondNumber;
            } else {
                secondNumber += key;
                out.textContent = secondNumber;
            }
            return;
        }

        //check if clicked button is in action array
        if (action.includes(key)) {
            sign = "";
            sign += key;
            out.textContent = sign;
            return;
        }

        //clicked on =
        if (key === "=") {
            if (sign !== "") {
                switch (sign) {
                    case "+":
                        firstNumber = +firstNumber + +secondNumber;
                        break;
                    case "-":
                        firstNumber = firstNumber - secondNumber;
                        break;
                    case "x":
                        firstNumber = firstNumber * secondNumber;
                        break;
                    case "/":
                        if (secondNumber === "0") {
                            out.textContent = "Error";
                            firstNumber = "";
                            secondNumber = "";
                            sign = "";
                            return;
                        }
                        firstNumber = firstNumber / secondNumber;
                        break;
                }
                finish = true;
                secondNumber = "";
                sign = "";
                firstNumber += "";
                out.textContent = firstNumber;
            } else {
                if (firstNumber === "") {
                    out.textContent = 0;
                } else {
                    out.textContent = firstNumber;
                }
            }
        }
    });

    document.querySelector(".delete").addEventListener("click", () => {
        // check what number user want to delete
        if (sign === "") {
            if (firstNumber !== "" && firstNumber.length > 1) {
                firstNumber = firstNumber.slice(0, firstNumber.length - 1);
                out.textContent = firstNumber;
            } else if (firstNumber.length === 1) {
                firstNumber = "";
                out.textContent = 0;
            }
        } else {
            if (secondNumber !== "" && secondNumber.length > 1) {
                secondNumber = secondNumber.slice(0, secondNumber.length - 1);
                out.textContent = secondNumber;
            } else if (secondNumber.length === 1) {
                secondNumber = "";
                out.textContent = 0;
            }
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);


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
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");


window.addEventListener("DOMContentLoaded", () => {
    (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map