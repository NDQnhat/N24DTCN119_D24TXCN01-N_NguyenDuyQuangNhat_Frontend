let number = +prompt("Enter a number");
let check = true;
if(number < 2){
    check = false;
} else {
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            check = false;
            break;
        }
    }
}
if(check){
    console.log("prime num");
} else {
    console.log("not a prime num");
}