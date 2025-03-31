// let array = [];
function check(array) {
    if(typeof array !== 'object') return "Invalid data";
    if(array.length === 0) return "Array is empty";
    const difference = array[1] - array[0];
    // array.forEach((element, index) => {
    //     if(index >= 1) {
    //         if(element - array[index - 1] !== difference) return false;
    //     }
    // });
    // return true;
    let isValid = true;
    array.forEach((element, index) => {
        if (index >= 1) {
            if (element - array[index - 1] !== difference) isValid = false;
        }
    });

    return isValid;
}

console.log(check([1, 3, 5, 7, 9])); // true

console.log(check([1, 3, 5, 8])); // false