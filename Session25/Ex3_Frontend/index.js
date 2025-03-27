function findEven(array) {
    let flag = false;
    if(Array.isArray(array)) {
        var evenArray = [];
        for(let number of array) {
            if(number % 2 === 0) {
                flag = true;
                evenArray.push(number);
            }
        }
    } else {
        return "Invalid data";
    }
    if(!flag)     return "Array not contain even element";
    return evenArray;
}
let array = [11, 65, 4, 6];
let result = findEven(array);
console.log(result);
let arr = "text";
result = findEven(arr);
console.log(result);
let _arr = [1, 3, 5, 7];
result = findEven(_arr);
console.log(result);