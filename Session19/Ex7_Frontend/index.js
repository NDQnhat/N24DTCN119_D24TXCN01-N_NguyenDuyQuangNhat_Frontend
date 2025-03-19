let a = +prompt("Nhap a: ");
let b = +prompt("Nhap b: ");
let c = +prompt("Nhap c: ");

let result = (a > b && a > c) ? `so lon nhat la ${a}` : (b > c && b > a) ? `so lon nhat la ${b}` : (c > b && c > a) ? `so lon nhat la ${c}` : "ba so bang nhau";
console.log(result);