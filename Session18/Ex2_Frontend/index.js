let mathPoint = prompt("Enter math point: ");
let literaturePoint = prompt("Enter literature point: ");
let engPoint = prompt("Enter eng point: ");
let avgPoint = (+mathPoint + +literaturePoint + +engPoint)/3.0
if(avgPoint < 0 || avgPoint >10) {
    alert("Average point neg or greater than 10! Check your input point");
} else if(avgPoint >= 8.0) {
    alert("Hoc. luc. gioi?");
}else if(avgPoint >= 6.5 && avgPoint <=7.9) {
    alert("Hoc. luc. kha'");
}else if(avgPoint >= 5.0 && avgPoint <= 6.4) {
    alert("Hoc. luc. trung binh`");
} else {
    alert("Hoc. luc. yeu'");
}