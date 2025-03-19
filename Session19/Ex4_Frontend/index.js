let input = +prompt("Enter a number: ");
let flag = 0;
if(input % 3 ==0 && input % 5 ==0) {
    flag = 1;
}
if(flag) {
    console.log(`${input} chia het cho 3 va 5`);
} else {
    console.log(`${input} khong chia het 3 va 5`);
}