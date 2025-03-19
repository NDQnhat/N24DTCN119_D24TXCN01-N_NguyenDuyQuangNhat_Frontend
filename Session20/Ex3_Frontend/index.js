let number = +prompt("Enter numberto check: ");
let temp = number;
let revNum = "";
while (temp > 0) {
    // revNum = revNum + "temp % 10";
    revNum = revNum + (temp % 10);
    temp = Math.floor(temp / 10);
}
revNum = Number(revNum);
if (number === revNum) {
    console.log("The number is a palindrome.");
} else {
    console.log("The number is not a palindrome.");
}