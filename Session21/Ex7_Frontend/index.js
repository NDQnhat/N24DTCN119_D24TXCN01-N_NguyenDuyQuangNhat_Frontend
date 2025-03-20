let money = +prompt("Enter the amount of money you have: ");
let interestRate = +prompt("Enter the interest rate (%): ");
let time = +prompt("Enter the month to send: ");
let interestMoneyPerMonth = 0;
let interestMoney = 0;
for (let i = 1; i <= time; i++) {
    interestMoneyPerMonth = money * interestRate / 100;
    interestMoney += interestMoneyPerMonth;
    money += interestMoneyPerMonth;
}
console.log(`Interst money: ${interestMoney}`);
console.log(`Total money: ${money}`);
