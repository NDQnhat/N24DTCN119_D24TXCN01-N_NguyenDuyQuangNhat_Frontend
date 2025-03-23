let arr = [0, 8, 9, 7, 7, 7, 8, 8, 0, 9, 1, 2, 5, 1, 6, 1];
console.log(arr);
for(let i = 0; i < arr.length; i++) {
    if(arr[i] === null)     continue;
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
            arr[j] = null;
        }
    }
} 
let size = arr.length;
for(let i = 0; i < size; i++) {
    if(arr[i] === null) {
        arr.splice(i, 1);
        i--;
        size--;
    }
}
console.log(arr);