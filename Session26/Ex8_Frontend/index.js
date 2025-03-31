let quantity = +prompt("Enter quantity of number to input (10 - 20): ");
function isPrime(number) {
    if (number < 2) return false
    for (let i = 2; i*i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
if (quantity < 10 || quantity > 20) {
    console.log("Invalid quantity");
} else {
    let array = [];
    for (let i = 0; i < quantity; i++) {
        let input = +prompt("Enter a number: ");
        array.push(input);
    }
    if(array.length === 0) console.log("Array is empty");
    else {
        let arr = array.filter(isPrime).filter(number => number % 2 !== 0);
        console.log(arr);
    }
}