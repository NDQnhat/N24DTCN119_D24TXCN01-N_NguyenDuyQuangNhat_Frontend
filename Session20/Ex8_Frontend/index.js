let n = +prompt("Enter quantity of prime num: ");
if (n < 0 || isNaN(n)) {
    console.log("Invalid input");
} else {
    let count = 0;
    let flag = true;
    let num = 2;
    while(count <= n) {
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i == 0) {
                flag = false;
                break;
            }
        }
        if(flag) {
            console.log(num);
            count++;
        }
        num++;
        flag = true;
    }
}