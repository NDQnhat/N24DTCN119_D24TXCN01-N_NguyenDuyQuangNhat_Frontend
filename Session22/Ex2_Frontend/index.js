let numbers = [0, 9, 5, 7, 3, 4, 2, 8, 1, 6];
let inp = +prompt("Enter a number to search: ");
for (let num of numbers) {
    if(num === inp) {
        alert("Bingo");
        break;
    } else {
        alert("Good luck next time");
        break;
    }
}