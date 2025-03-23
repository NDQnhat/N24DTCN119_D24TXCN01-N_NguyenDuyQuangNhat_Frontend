let randNum = 0;
let sumOdd = 0;
let sumEven = 0;
let randArr = [];
for(let i = 0;i < 5; i++){
    randNum = Math.floor(Math.random() + Math.abs((Math.random() - Math.random())) * 100);
    randArr.push(randNum);
}
for(let num of randArr){
    if(num % 2 == 0){
        sumEven += num;
    } else {
        sumOdd += num;
    }
}
console.log(`Random array: ${randArr}`);
console.log(`Sum of odd num: ${sumOdd}`);
console.log(`Sum of even num: ${sumEven}`);