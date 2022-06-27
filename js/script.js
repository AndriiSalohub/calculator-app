window.addEventListener("DOMContentLoaded", () => {
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
});
