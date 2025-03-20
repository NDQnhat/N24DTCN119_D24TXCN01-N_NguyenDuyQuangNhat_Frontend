for(let i = 0; i < 7; i++) {
    for(let j = 0; j < 20; j++) {
        if(i === 0 || i === 6) {
            document.writeln("*");
        }
        if((j > 0 && j < 19) && (i > 0 && i < 6)) {
            document.writeln("&nbsp;&nbsp;");
        }
        if(( j === 0 || j === 19) && (i !== 0 && i !== 6)) {
            document.writeln("*")
        }
    }
    document.writeln("<br>");
}