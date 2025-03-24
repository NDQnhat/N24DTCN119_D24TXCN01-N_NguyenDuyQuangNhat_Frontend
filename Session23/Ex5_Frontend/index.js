let n = +prompt("Enter quantity of array: ");
let arr = [];
let sum = 0;
let flag = false;
if(n < 0) {
    console.log("Cannot a neg number!!");
} else if(n == 0) {
    console.log("Array not exist element!!");
} else {
    for (let i = 0; i < n; i++) {
        arr.push(+prompt("Enter element: "));
    }
    for(let i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i])) {
            flag = true;
            sum += arr[i];                        
        }
    }
    if(flag) {
        console.log(sum);
    } else {
        console.log("Not exist element is number!!");
    }
}