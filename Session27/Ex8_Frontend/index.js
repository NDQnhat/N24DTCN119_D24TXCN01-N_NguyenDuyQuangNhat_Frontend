let inp = +prompt("Enter a number: ");
if(isNaN(inp)) {
    console.log("Invalid data");
} else {
    inp = inp.toString();
    inp = inp.split("");
    inp.sort((a, b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    inp = inp.join("");
    console.log(`Max number can create: ${inp}`);
}