// calculator-app/app.js - MODULE 1
function calculate(num1, num2, operation) {
 console.log(`Calculating ${num1} ${operation} ${num2}`);
 
 if (operation === "add") {
 return num1 + num2;
 }
 
 return "Operation not implemented";
}

console.log(calculate(5, 3, "add"));