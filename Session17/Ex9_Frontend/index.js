let a = prompt("Enter a: ");
let b = prompt("Enter b: ");
let c = prompt("Enter c: ");
let delta = +b *b -4*a*c;
let x1 = (-b + Math.sqrt(delta))/(2*a);
let x2 = (-b - Math.sqrt(delta))/(2*a);
document.writeln(`x1 = ${x1}`);
document.writeln(`x2 = ${x2}`);