let check = ["", false, 0, null, undefined, NaN, -0];
let array = [ "", false, 0, 5, 10, "Hello world!"];
// let array = [ "", false, 0, undefined, null ];
for (let i = 0; i < array.length; i++) {
    // if(array[i] == false) {
    //     array.splice(i, 1);
    //     i--;
    // }
    if (check.includes(array[i])) {
        array.splice(i, 1);
        i--;
    }
}
console.log(array);