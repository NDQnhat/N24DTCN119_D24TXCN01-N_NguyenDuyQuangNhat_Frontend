// let array = [];
function findLess(array) {
    if(typeof array !== 'object') return "Invalid data";
    if(array.length === 0) return "Array is empty";
    const difference = array[1] - array[0];
    let _index = -1;
    array.forEach((element, index) => {
        if (index >= 1) {
            if (element - array[index - 1] !== difference) _index = index;
        }
    });
    let result = array[_index - 1] + difference;
    return result;
}
console.log(findLess([1, 2, 3, 5]));

console.log(findLess([1, 2, 4, 5]));