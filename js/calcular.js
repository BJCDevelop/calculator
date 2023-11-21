let input = document.getElementById('input');

function appendValue(value) {
    input.value += value;
}

function appendOperator(operator) {
    input.value += operator;
}

function calculate() {
    try {
        let result = eval(input.value);
        input.value = result;
    } catch (error) {
        input.value = 'Error';
    }
}

function deleteDigit() {
    input.value = input.value.slice(0, -1);
}

function clearInput() {
    input.value = '';
}