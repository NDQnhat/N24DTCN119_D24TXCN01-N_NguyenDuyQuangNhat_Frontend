let n = +prompt("Enter quantity of array: ");
let arr = [];
if(n < 0) {
    console.log("Invalid input");
} else if(n == 0) {
    console.log("None character");
} else {
    for (let i = 0; i < n; i++) {
        arr.push(+prompt("Enter element: "));
    }
    for(let i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i])) {
            console.log(arr[i]);            
        }
    }
}