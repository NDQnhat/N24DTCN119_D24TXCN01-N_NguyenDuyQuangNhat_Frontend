let numArray = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
for(let i = 0; i < numArray.length - 1; i++) {
    for(let j = 0; j < numArray.length - i - 1; j++) {
        if(numArray[j] > numArray[j + 1]) {
            let temp = numArray[j];
            numArray[j] = numArray[j + 1];
            numArray[j + 1] = temp;
        }
    }
}
// numArray.sort();
console.log("Sorted array: " + numArray);