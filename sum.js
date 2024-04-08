let n1 = document.getElementById("number");
let r = document.getElementById("result");

function displayData(){
let n = Math.floor(n1.value)
r.innerHTML = "Fibonnacci ("+n+")="+fib(n)
}
function fib(n){
let fibArray = [0, 1]; // เก็บค่า Fibonacci ที่คำนวณไว้
for (let i = 2; i <= n; i++) {
fibArray[i] = fibArray[i - 1] + fibArray[i - 2]; // คำนวณค่า Fibonacci โดยใช้ค่าที่คำนวณไว้แล้ว
}
return fibArray[n];
}