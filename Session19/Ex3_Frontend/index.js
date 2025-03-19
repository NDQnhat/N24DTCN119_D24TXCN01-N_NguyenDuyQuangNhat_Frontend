let money = +prompt("Enter money to change: ");
alert("1. USDT to VND   2. VND to USDT");
let command = +prompt("Enter your choice: ");
switch(command) {
    case 1:
        money *= 23000;
        alert(`${money} VND`);
        break;
    case 2:
        money /= 23000;
        alert(`${money} USDT`);
        break;
    default:
        alert("Invalid");
        break;
}