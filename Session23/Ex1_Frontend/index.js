let arr = [1, 0, 11, 21, 10, 7, 77, 9, 13, 2];
let numbers = [];
for(let num of arr) {
    // if(Math.pow(Math.floor(Math.sqrt(num)), 2) === num && num >= 10) {
    // if(Math.sqrt(num) % 1 === 0 && num >= 10) {
    if(Number.isInteger(num) && num >= 10) {
        numbers.push(num);
    }
}
if(numbers.length > 0) {
    console.log(numbers);
} else {
    console.log('No number greater than 10');
}