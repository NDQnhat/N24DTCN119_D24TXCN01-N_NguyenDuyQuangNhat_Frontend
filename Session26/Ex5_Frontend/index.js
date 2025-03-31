let array = [];
for(let i = 0; i < 10; i++) {
    let inp = +prompt("Enter a number: ");
    array.push(inp);
}
let max = Math.max(...array);
let index = array.indexOf(max);
console.log("Max: ", max + ", index: " , index);
