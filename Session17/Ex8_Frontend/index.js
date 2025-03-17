let day1 = prompt("nhap ngay thu 1 duoi dang (YYYY-MM-DD): ");
let day2 = prompt("nhap ngay thu 2 duoi dang (YYYY-MM-DD): ");
const time1 = new Date(day1);
const time2 = new Date(day2);

console.log(time1);
console.log(time2);

let neg = time2 - time1;
let diff = neg/(24*60*60*1000);
console.log(neg);
console.log(diff);
console.log(`Độ lệch là: ${diff} ngày`);