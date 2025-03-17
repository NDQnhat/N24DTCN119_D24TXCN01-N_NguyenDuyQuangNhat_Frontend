let number = prompt("Enter a number: ");
let check = Math.sqrt(number);
// let result = isNaN(check) ? `so ${number} khong phai so chinh phuong` : `so ${number} la so chinh phuong`;
let result = (check % 1 ==0) ? `so ${number} la so chinh phuong` : `so ${number} khong phai so chinh phuong`;
console.log(result);
