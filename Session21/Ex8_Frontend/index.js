let sum = 0;
let num;
let index;
for (let i = 100; i < 1000; i++) {
    index = i;
    sum = 0;
    // while (index % 10 !== 0) {
    while (index > 0) {
        num = index % 10;
        sum += num ** 3;
        index = Math.floor(index / 10);
    }
    if (sum === i) {
        console.log(i);
    }
}