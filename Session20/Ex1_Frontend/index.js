let n = +prompt("Enter a number: ");
let sum = 0;
if(isNaN(n) || n < 0) {
    console.log("Invalid data");
} else {
    for(let i = 1; i <= n; i++) {
        sum +=i;
    }
    console.log(sum);
}