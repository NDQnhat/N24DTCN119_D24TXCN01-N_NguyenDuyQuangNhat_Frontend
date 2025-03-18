let a = prompt("Enter edge of triangle: ");
let b = prompt("Enter edge of triangle: ");
let c = prompt("Enter edge of triangle: ");
a = +a; b = +b; c = +c;
if(a + b > c || b + c > a || a + c > b) {
    if(a === b && b === c) {
        alert("equilateral triangle");
    } else if(a === b || a === c || b === c) {
        alert("Isosceles triangle");
    } else if(a*a === b*b - c*c || b*b === a*a - c*c || c*c === a*a - b*b) {
        alert("Square triangle");
    } else {
        alert("Normal triangle");
    }
} else {
    alert("Not a triangle");
}