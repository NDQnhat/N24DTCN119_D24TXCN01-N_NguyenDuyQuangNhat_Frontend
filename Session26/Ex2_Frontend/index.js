let array = [];
for(let i = 0; i < 5; i++) {
    let inp = prompt("Enter string of array");
    array.push(inp);
}
let flag = true;
for(let element of array) {
    if(typeof element !== "string") {
        flag = false;
        break;
    }
}
if(flag) {
    let arr = array.filter(element => element.length >= 5);
    console.log(arr);
} else {
    console.log("Data invalid");
}