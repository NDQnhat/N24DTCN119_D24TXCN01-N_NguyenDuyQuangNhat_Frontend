function isPrime(number) {
    if(isNaN(number)) return "Invalid data";
    if(number < 2) return false;
    for(let i = 2; i*i <= number; i++) {
        if(number % i === 0) return false;
    }
    return true;
};

let number = +prompt("Enter a number: ");
if(isPrime(number)) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
}