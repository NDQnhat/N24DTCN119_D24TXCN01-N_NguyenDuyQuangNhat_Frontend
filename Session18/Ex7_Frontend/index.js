let a = prompt("Enter number a: ");
let b = prompt("Enter number b: ");
a = +a;
b = +b;
let result;
let cal = prompt("Enter calculate (+,-,*,/): ");
switch(cal) {
    case '+':
        result = a + b;
        alert(`Result: a ${cal} b = ${result}`);
        break;
    case '-':
        result = a - b;
        alert(`Result: a ${cal} b = ${result}`);
        break;
    case '*':
        result = a * b;
        alert(`Result: a ${cal} b = ${result}`);
        break;
    case '/':
        result = a / b;
        alert(`Result: a ${cal} b = ${result}`);
        break;
    default: 
        alert("invalid calculate!");
        break;
}