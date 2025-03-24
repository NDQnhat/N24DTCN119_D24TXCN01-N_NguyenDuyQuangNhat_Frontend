let n = +prompt("Enter quantity of array: ");
let arr = [];
let count = 0;
if(n < 0) {
    console.log("Invalid input");
} else if(n == 0) {
    console.log("Array is empty");
} else {
    for (let i = 0; i < n; i++) {
        arr.push(+prompt("Enter element: "));
    }
    for(let i = 0; i < arr.length; i++) {
        if(Number.isInteger(arr[i]) && arr[i] < 0) {
            count++;
        }
    }
    console.log(count);
}