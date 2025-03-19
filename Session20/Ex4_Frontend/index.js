let string = prompt("Enter a string: ");
let char = prompt("Enter a char to find: ");
if(string.includes(char)){
    console.log("Exist char to find");
} else {
    console.log("Not exist char to find");
}