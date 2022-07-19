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

let firstNumber = 0;
let secondNumber = 1;
let operatorClicked = false;
let isReset = false;

const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
	if (b === 0) {
		return "ERROR";
	}
	return a / b;
};

const resetDisplayArea = () => (displayArea.textContent = "");

const addToDisplayArea = content => {
	displayArea.textContent += content;
};

const addToCalculationArea = content => {
	calculationArea.textContent += content;
};

const addNumberEventListener = () => {
	for (let number of numbers) {
		number.addEventListener("click", event => {
			addToDisplayArea(event.target.textContent);
		});
	}
};

const addOperatorToDisplay = operator => {
	if (operatorClicked) {
		calculationArea.textContent = calculationArea.textContent.slice(0, -3);
		if (operator === operators[0]) {
			addToCalculationArea(" / ");
		} else if (operator === operators[1]) {
			addToCalculationArea(" x ");
		} else if (operator === operators[2]) {
			addToCalculationArea(" - ");
		} else if (operator === operators[3]) {
			addToCalculationArea(" + ");
		}
	} else {
		firstNumber = parseInt(displayArea.textContent);
		addToCalculationArea(firstNumber);
		if (operator === operators[0]) {
			addToCalculationArea(" / ");
		} else if (operator === operators[1]) {
			addToCalculationArea(" x ");
		} else if (operator === operators[2]) {
			addToCalculationArea(" - ");
		} else if (operator === operators[3]) {
			addToCalculationArea(" + ");
		}
		operatorClicked = true;
		resetDisplayArea();
	}
};

const addOperatorEventListener = () => {
	for (let operator of operators) {
		operator.addEventListener("click", event => {
			addOperatorToDisplay(operator);
		});
	}
};

addNumberEventListener();
addOperatorEventListener();
