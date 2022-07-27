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
let resultDisplayed = false;

const add = (a, b) => {
	num = a + b;
	return Math.round(num * 100) / 100;
};

const minus = (a, b) => {
	num = a - b;
	return Math.round(num * 100) / 100;
};

const multiply = (a, b) => {
	num = a * b;
	return Math.round(num * 100) / 100;
};

const divide = (a, b) => {
	if (b === 0) {
		return "ERROR";
	}
	num = a / b;
	return Math.round(num * 100) / 100;
};

const percentage = (a, b) => {
	num = (a / 100) * b;
	return Math.round(num * 100) / 100;
};

const resetDisplayArea = () => (displayArea.textContent = "");

const resetCalculationArea = () => (calculationArea.textContent = "");

const clearCalculator = () => {
	resetDisplayArea();
	resetCalculationArea();
	firstNumber = 0;
	secondNumber = 1;
};

const addToDisplayArea = content => (displayArea.textContent += content);

const addToCalculationArea = content => {
	calculationArea.textContent += content;
};

const changeDisplayArea = content => (displayArea.textContent = content);

const suppressLastNumber = () => {
	if (resultDisplayed) {
		return;
	}
	changeDisplayArea(displayArea.textContent.slice(0, -1));
};

const addComma = () => {
	if (
		displayArea.textContent.slice(-1) === "." ||
		displayArea.textContent.slice(-1) === ""
	) {
		return;
	}
	addToDisplayArea(".");
};

const changeSign = () => {
	if (displayArea.textContent === "0" || displayArea.textContent === "") {
		return;
	}
	displayArea.textContent = (-Number(displayArea.textContent)).toString();
};

const addResetEventListener = () =>
	clear.addEventListener("click", clearCalculator);

const addNumberEventListener = () => {
	for (let number of numbers) {
		number.addEventListener("click", event => {
			if (resultDisplayed) {
				changeDisplayArea(event.target.textContent);
				resetCalculationArea();
				resultDisplayed = false;
			} else {
				addToDisplayArea(event.target.textContent);
			}
		});
	}
};

const addOperatorToDisplay = operator => {
	if (resultDisplayed) {
		if (operatorClicked) {
			calculationArea.textContent = calculationArea.textContent.slice(0, -3);
			if (operator === operators[0]) {
				addToCalculationArea(" / ");
			} else if (operator === operators[1]) {
				addToCalculationArea(" x ");
			} else if (operator === operators[2]) {
				addToCalculationArea(" − ");
			} else if (operator === operators[3]) {
				addToCalculationArea(" + ");
			}
		} else {
			firstNumber = Number(displayArea.textContent);
			calculationArea.textContent = firstNumber;
			if (operator === operators[0]) {
				addToCalculationArea(" / ");
			} else if (operator === operators[1]) {
				addToCalculationArea(" x ");
			} else if (operator === operators[2]) {
				addToCalculationArea(" − ");
			} else if (operator === operators[3]) {
				addToCalculationArea(" + ");
			} else if (operator === "%") {
				addToCalculationArea(" % ");
			}
			operatorClicked = true;
			resetDisplayArea();
			resultDisplayed = false;
		}
	} else {
		if (operatorClicked) {
			calculationArea.textContent = calculationArea.textContent.slice(0, -3);
			if (operator === operators[0]) {
				addToCalculationArea(" / ");
			} else if (operator === operators[1]) {
				addToCalculationArea(" x ");
			} else if (operator === operators[2]) {
				addToCalculationArea(" − ");
			} else if (operator === operators[3]) {
				addToCalculationArea(" + ");
			} else if (operator === "%") {
				addToCalculationArea(" % ");
			}
		} else {
			firstNumber = Number(displayArea.textContent);
			addToCalculationArea(firstNumber);
			if (operator === operators[0]) {
				addToCalculationArea(" / ");
			} else if (operator === operators[1]) {
				addToCalculationArea(" x ");
			} else if (operator === operators[2]) {
				addToCalculationArea(" − ");
			} else if (operator === operators[3]) {
				addToCalculationArea(" + ");
			} else if (operator === "%") {
				addToCalculationArea(" % ");
			}
			operatorClicked = true;
			resetDisplayArea();
		}
	}
};

const addOperatorEventListener = () => {
	for (let operator of operators) {
		operator.addEventListener("click", event => {
			addOperatorToDisplay(operator);
		});
	}
};

const addEqualEventListener = () => {
	equal.addEventListener("click", () => {
		operatorClicked = false;
		secondNumber = Number(displayArea.textContent);
		if (calculationArea.textContent.includes("+")) {
			changeDisplayArea(add(firstNumber, secondNumber));
			addToCalculationArea(secondNumber);
		} else if (calculationArea.textContent.includes("−")) {
			changeDisplayArea(minus(firstNumber, secondNumber));
			addToCalculationArea(secondNumber);
		} else if (calculationArea.textContent.includes("/")) {
			changeDisplayArea(divide(firstNumber, secondNumber));
			addToCalculationArea(secondNumber);
		} else if (calculationArea.textContent.includes("x")) {
			changeDisplayArea(multiply(firstNumber, secondNumber));
			addToCalculationArea(secondNumber);
		} else if (calculationArea.textContent.includes("%")) {
			changeDisplayArea(percentage(firstNumber, secondNumber));
			addToCalculationArea(secondNumber);
		}
		firstNumber = Number(displayArea.textContent);
		resultDisplayed = true;
	});
};

const addSuppressEventListener = () =>
	suppress.addEventListener("click", suppressLastNumber);

const addPercentEventListener = () =>
	percent.addEventListener("click", () => addOperatorToDisplay("%"));

const addCommaEventListener = () => comma.addEventListener("click", addComma);

const plusMinusEventLister = () =>
	plusMinus.addEventListener("click", changeSign);

addNumberEventListener();
addOperatorEventListener();
addEqualEventListener();
addResetEventListener();
addSuppressEventListener();
addPercentEventListener();
addCommaEventListener();
plusMinusEventLister();
