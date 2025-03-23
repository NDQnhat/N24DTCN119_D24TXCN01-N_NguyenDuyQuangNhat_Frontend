let count = 1;
let num = 0;
let arr ="";
for(let i = 0; i < 10;i++) {
    num = Math.floor(Math.random() * (10 - 1) + 1);
    arr += num;
}
arr = arr.split("");
console.log(arr);
let times = [];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] === null)     continue;
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
            count++;
            arr[j] = null;
        }
    }
    times.push(arr[i]);
    times.push(count);
    count = 1;
}
count = times[1];
num = times[0];
for(let i = 1; i < times.length; i += 2) {
    if(times[i] > count || (times[i] === count && times[i - 1] < num)) {
        count = times[i];
        num = times[i - 1];
    }
}
console.log(`${num} appear the most with ${count} times`);