let n1 = document.getElementById("num");
let r = document.getElementById("result");

function displayData() {
    let n = parseInt(n1.value);
    r.innerHTML = "Fibonacci (" + n + ") = " + fib(n);
}

function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n, 0, 1);
}

function fibonacciRecursive(n, a, b) {
    if (n === 0) {
        return a;
    }
    if (n === 1) {
        return b;
    }
    return fibonacciRecursive(n - 1, b, a + b);
}