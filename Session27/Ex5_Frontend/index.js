let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let size = +prompt("Enter size of sub array");

function divideArray(array, n) {
    let temp = [];
    let subArray = [];
    let index = 0;
    while(index < array.length) {
        subArray = [];
        for(let i = 0; i < n && index < array.length; i++) {
            subArray.push(array[index]);
            index++;
        }
        temp.push(subArray);
    }
    // array = temp;
    return temp;
}
if(size > array.length || size <= 0) {
    console.log("Invalid size");
} else if (typeof array !== "object") {
    console.log("Invalid data");
} else {
    // divideArray(array, size);
    let result = divideArray(array, size)
    console.log(result);
}