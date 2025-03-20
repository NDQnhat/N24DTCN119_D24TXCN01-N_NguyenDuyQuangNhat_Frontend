let inp = +prompt("Enter a number: ");
let first = 1;
for (let i = inp; i >= 1; i--) {
    if(inp % i == 0) {
        if(first) {
            console.log("Uoc so cua " + inp + " la: ");
            console.log(i);
            first = 0;
        } else {
            console.log(i);
        }
    }
}