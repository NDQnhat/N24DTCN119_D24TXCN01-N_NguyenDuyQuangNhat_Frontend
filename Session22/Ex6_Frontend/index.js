let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let inpNum = +prompt("Enter any number: ");
let count = 0;
for(let num of numbers){
    if(num === inpNum){
        count++;
    }
}
if(!count){
    console.log(`${inpNum} not exist in array`);
}else{
    console.log(`${inpNum} appear ${count} times in array`);
}
