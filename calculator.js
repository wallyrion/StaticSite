function plus() {
    processOperation((a, b) => a + b)
}

function minus() {
    processOperation((a, b) => a - b)
}

function multiple() {
    processOperation((a, b) => a * b)
}

function divide() {
    processOperation((a, b) => a / b)
}

function processOperation(callback) {
    const a = document.getElementById('firstInput');
    const b = document.getElementById('secondInput');

    const result = document.getElementById('result');
    result.value = callback(+a.value, +b.value);
}