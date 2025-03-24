let arr = [1, 0, 11, 21, 10, 7, 77, 9, 13, 2];
// let arr = [];
let index = 0;
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        index = i;
    }
}
if(arr.length === 0){
    console.log("Not exist the largest");
} else {
    console.log(`Largest num: ${max}, index: ${index}`);
}