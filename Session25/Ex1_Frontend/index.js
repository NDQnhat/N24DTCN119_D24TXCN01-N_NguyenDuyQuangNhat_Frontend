function findMin(array) {
    if(array.length === 0) {
        return "Array empty";
    } else if(!Array.isArray(array)) {
        return "Invalid value";
    } else if(Array.isArray(array)) {
        let min = array[0];
        for(let i = 1; i < array.length; i++) {
            if(array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }
}

let array = [5, 10, 8, 2, 7];
let arr = [];
let _arr = "abc";
let min = findMin(array);
console.log(min);
min = findMin(arr);
console.log(min);
min = findMin(_arr);
console.log(min);