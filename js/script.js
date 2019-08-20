const output = document.querySelector('#output');

//insert symbol
const insert = (num) => {
	if(output.value == 0) {
		output.value = num;
	} else {
		output.value += num; 
	}
};

//clear output field
const clean = () => {
	output.value = '0';
};

//delete last symbol
const deleteLast = () => {
	const str = output.value;
	if (str.length == 1) {
		output.value = '0';
	} else {
		output.value = str.substring(0, str.length - 1);
	}
};

//print answer
const equal = () => {
	const str = output.value;
	output.value = eval(str);
}

//keyboard support
document.addEventListener('keydown', (event) => {
	const keyName = event.key;
	const avaibleKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '+', '*', '/', '.', '(', ')'];
	for (let i = 0; i < avaibleKeys.length; i++) {
		if (keyName == 'Enter' || keyName == '=') {
			equal();
			break;
		}
		if (keyName == 'Backspace') {
		deleteLast();
		break;
		}

		if (keyName.toLowerCase() == 'c') {
			clean();
			break;
		}

		if (keyName == avaibleKeys[i]) {
			insert(keyName);
			break;
		}
	}
});