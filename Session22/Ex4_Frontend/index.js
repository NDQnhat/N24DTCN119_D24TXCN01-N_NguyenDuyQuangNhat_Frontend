let inp = prompt("Nhap day so bat ki: ");
inp = inp.split("");
let max = inp[0];
for(let num of inp){
    if(num > max){
        max = num;
    }
}
console.log(`So lon nhat trong day so la ${max}`);
