let money = prompt("Enter money to send: ");
let month = prompt("Enter time to send (month): ");
let total = +money + (+money*0.043*month/12);
console.log(total);