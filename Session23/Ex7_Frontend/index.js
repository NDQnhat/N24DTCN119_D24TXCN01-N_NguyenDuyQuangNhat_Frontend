let n = +prompt("Enter quantity of array: ");
let arr = [];
if(n < 0) {
    console.log("Quantity element cannot neg!!");
} else if(n == 0) {
    console.log("Array is empty");
} else {
    for (let i = 0; i < n; i++) {
        arr.push(+prompt("Enter element: "));
    }
    let max1 = 0;
    let max2 = 0;
    if(arr[0] > arr[1]) {
        max1 = arr[0];
        max2 = arr[1];
    } else {
        max1 = arr[1];
        max2 = arr[0];
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        }
    }
    console.log(max2);
}