function calculateSum(num1, num2) {
    if(isNaN(num1) || isNaN(num2) || Math.isInteger(num1) || Math.isInteger(num2)) {
        return "Invalid data";
    } else {
        return num1 + num2;
    }
}

let num1 = +prompt("Enter 1st num: ");
let num2 = +prompt("Enter 2nd num: ");
let result = calculateSum(num1, num2);
console.log(result);