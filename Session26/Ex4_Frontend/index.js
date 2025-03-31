function isPrime(number) {
    if(number < 2) return false;
    for(let i = 2; i*i <= number; i++) {
        if(number % i === 0) return false;
    }
    return true;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = array.filter(isPrime);
console.log(arr);