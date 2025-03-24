let n = +prompt("Enter a quantity: ");
let Fn0 = 1;
let Fn1 = 0;
let Fn = 0;
let flag = true;
let arr = [];
let fibonacciArr = [];
if(n < 0) {
    console.log("Quantity element cannot neg!!");
} else if(n == 0) {
    console.log("Not a fibonacci series");
} else {
    for (let i = 0; i < n; i++) {
        arr.push(+prompt("Enter element: "));
    }
    for(let i = 0; i < n - 1; i++){
        if(i == 0) {
            Fn = 0;
            fibonacciArr.push(Fn);
        }
        if(i == 1){
            Fn0 = Fn1;
            Fn1 = Fn;
            Fn = 1;
            fibonacciArr.push(Fn);
        } else {
            Fn = Fn0 + Fn1;
            Fn0 = Fn1;
            Fn1 = Fn;
            fibonacciArr.push(Fn);
        }
    }
    for(let i = 0; i < n; i++) {
        if(fibonacciArr[i] !== arr[i]) {
            console.log("Not a fibonacci series");
            flag = false;
            break;
        } else {
            continue;
        }
    }
}
if(flag) {
    console.log("Is a fibonacci series");
}
console.log(fibonacciArr);
console.log(arr);