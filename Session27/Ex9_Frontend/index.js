function sortEven(array) {
    if (!Array.isArray(array)) return "Invalid data";
    let result = [...array];
    // for (let i = 0; i < result.length; i++) {
    //     if (result[i] % 2 === 0) {
    //         let minIndex = i; 
    //         for (let j = i + 1; j < result.length; j++) {
    //             if (result[j] % 2 === 0 && result[j] < result[minIndex]) {
    //                 minIndex = j;
    //             }
    //         }
    //         if (minIndex !== i) {
    //             let temp = result[i];
    //             result[i] = result[minIndex];
    //             result[minIndex] = temp;
    //         }
    //     }
    // }
//dung` selection sort de~ hon nhung tao. do. kho' bang` cach' dung` insertion sort
    for (let i = 0; i < result.length; i++) {
        if (result[i] % 2 === 0) {
            let key = result[i];
            let j = i - 1;
            while (j >= 0) {
                if (result[j] % 2 !== 0) {
                    j--;
                    continue;
                }
                if (result[j] > key) {
                    let temp = result[j];
                    result[j] = result[i];
                    result[i] = temp;
                    i = j;
                    j = i - 1;
                } else {
                    break;
                }
            }
        }
    }
    
    return result;
}

console.log(sortEven([5, 8, 6, 3, 4, 2, 7])); // [5, 2, 4, 3, 6, 8, 7]
console.log(sortEven([5, 9, 6, 4, 1, 8, 3])); // [5, 9, 4, 6, 1, 8, 3]
console.log(sortEven("abc")); // "Invalid data"