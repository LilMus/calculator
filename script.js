let calculationArea = document.querySelector(".calculation-area");
let displayArea = document.querySelector(".display-area");
const numbers = document.getElementsByClassName("numbers");
const operators = document.getElementsByClassName("operators");
const equal = document.querySelector(".div20");
const percent = document.querySelector(".div1");
const clear = document.querySelector(".div2");
const suppress = document.querySelector(".div3");
const comma = document.querySelector(".div19");
const plusMinus = document.querySelector(".div17");

const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
	if (b === 0) {
		return "ERROR";
	}
	return a / b;
};
