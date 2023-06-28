function clearResult() {
    document.getElementById('result').textContent = '';
}

function appendSymbol(symbol) {
    document.getElementById('result').textContent += symbol;
}

function calculate() {
    const result = eval(document.getElementById('result').textContent);
    document.getElementById('result').textContent = result;
}

function eraseLast() {
    var result = document.getElementById("result").innerHTML;
    if (result.length > 0) {
        result = result.slice(0, -1);
        document.getElementById("result").innerHTML = result;
    }
}
