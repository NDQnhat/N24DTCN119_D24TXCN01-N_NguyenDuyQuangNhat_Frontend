function isPositive(number) {
    // if(isNaN(number) || !Math.isInteger(number)) return false;
    if(isNaN(number) || !Number.isInteger(number)) return false;
    return number > 0;
};

function countPositive(arrayNumber) {
    let count = 0;
    for(let number of arrayNumber) {
        if(isPositive(number)) count++;
    }
    return count ? count : "Not exists positive number in array";
};

let array = [0, 5, -5, 2, 4, 7];
let result = countPositive(array);
console.log(result);
array = [1.2, -3, -7];
result = countPositive(array);
console.log(result);