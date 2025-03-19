let number = +prompt("Enter a quantity: ");
let Fn0 = 0;
let Fn1 = 1;
let Fn = 0;
if(number < 0 || isNaN(number)){
    console.log("Invalid input");
} else {
    for(let i = 0; i <= number; i++){
        if(i == 0 || i == 1){
            Fn0 = Fn1;
            Fn1 = Fn;
            Fn = 1;
            console.log(Fn);
        } else {
            Fn = Fn0 + Fn1;
            Fn0 = Fn1;
            Fn1 = Fn;
            console.log(Fn);
        }
        // console.log(Fn);
    }
}