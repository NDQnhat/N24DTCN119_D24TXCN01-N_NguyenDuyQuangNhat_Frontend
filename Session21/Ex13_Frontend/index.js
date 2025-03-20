// document.writeln
// (`
//     **********<br>
//     *********<br>
//     ********<br>
//     *******<br>
//     ******<br>
//     *****<br>
//     ****<br>
//     ***<br>
//     **<br>
//     *<br>
// `);
document.writeln("<br>a. <br>");
for(let i = 0; i < 10; i++) {
    for(let j = i; j < 10; j++) {
        document.writeln("*");
    }
    document.writeln("<br>");
}
document.writeln("<br>b. <br>");
for(let i = 10; i >= 0; i--) {
    for(let j = i; j < 10; j++) {
        document.writeln("*");
    }
    document.writeln("<br>");
}
document.writeln("<br>c. <br>");
for(let i = 10; i >= 0; i--) {
    for(let j = 0; j < i; j++) {
        document.writeln("&nbsp;&nbsp;");
    }
    for(let j = i; j < 10; j++) {
        document.writeln("*");
    }
    document.writeln("<br>");
}
document.writeln("<br>d. <br>");
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < i; j++) {
        document.writeln("&nbsp;&nbsp;");
    }
    for(let j = i; j < 10; j++) {
        document.writeln("*");
    }
    document.writeln("<br>");
}