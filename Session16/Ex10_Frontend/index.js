let num1 = prompt("Enter 1st num: ");
let num2 = prompt("Enter 2nd");
// let randNum = Math.random(+num1, +num2);
let randNum = Math.floor(Math.random() * (num2 - num1) + +num1);
// let randomNum = Math.random() * (num1 - num2) - num1;
alert(`Your random number in range: ${randNum}`);
// alert(randomNum);