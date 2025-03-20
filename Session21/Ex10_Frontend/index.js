let quantity = +prompt("Enter quantity prime number: ");
let num = 2;
let flag = true;
while(quantity !== 0) {
    for(let i = 2; i*i <= num; i++){
        if(num % i === 0){
            flag = false;
            break;
        }
    }
    if(flag){
        console.log(num);
        quantity--;
    }
    flag = true;
    num++;
}