alert("enter A^B: ");
let a = prompt("Enter a: ");
let b = prompt("Enter b: ");
let result = 1;
if(isNaN(a) || isNaN(b) || b < 0){
    console.log("Invalid input");
} else {
    for (let i = 1; i <= b; i++) {
        result *= a;
    }
    console.log(result);
}