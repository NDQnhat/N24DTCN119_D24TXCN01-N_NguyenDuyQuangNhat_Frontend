let array = [];
for(let i = 0; i < 10; i++) {
    let input = +prompt("Enter a number: ");
    array.push(input);
}
// let arr = array.filter(element => {
//     return (element ** 2) ? (element ** 2) % 2 === 0 : (element ** 2) % 2 === 0;
// });
let arr = array.map(element => element ** 2).filter(element => element % 2 === 0);
console.log(array);
console.log(arr);