alert("phuong trinh ax^2 + bx + c = 0");
let a = +prompt("Enter a: ");
let b = +prompt("Enter b: ");
let c = +prompt("Enter c: ");
let delta = b*b - 4*a*a*c;
let x1, x2;
if(delta < 0 ) {
    console.log(("phuong tinnh vo nghiem"));
} else if(delta === 0) {
    x1 = x2 = -b / (2*a);
    console.log("phuong trinh cos nghiem kep x1 = x2 =" + x1);
} else {
    x1 = (-b + Math.sqrt(delta))/ (2*a);
    x2 = (-b - Math.sqrt(delta))/ (2*a);
    console.log("phuong trinh co 2 nghiem x1 = " + x1 + "x2 = " + x2);
}