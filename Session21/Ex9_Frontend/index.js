let inp = +prompt("Enter a number: ");
let flag = true;
if (inp < 2) {
  flag = false;
} else {
    for(let i = 2; i*i <= inp; i++){
        if(inp % i == 0){
            flag = false;
            break;
        }
    }
}
if(flag){
    console.log("Prime num");
} else {
    console.log("Not a prime num");
}