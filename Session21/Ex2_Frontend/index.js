let num;
let countOdd = 0;
let countEven = 0;
for(let i = 0; i < 5; i++) {
    num = +prompt("Enter a number:");
    if(num % 2 !==0) {
        countOdd++;
    } else {
        countEven++;
    }
}
console.log(countOdd + " odd num");
console.log(countEven + " even num");