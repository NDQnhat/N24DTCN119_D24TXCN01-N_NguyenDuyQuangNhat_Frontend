let num;
let sum = 0;
for(let i = 0; i < 5; i++) {
    num = +prompt("Enter a number:");
    if(num % 2 !==0) {
        sum += num;
    }
}
console.log(sum);