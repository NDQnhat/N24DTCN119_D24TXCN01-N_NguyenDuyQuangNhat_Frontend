let month = +prompt("Enter month in year: ");
let season;
switch(month) {
    case 1: case 2: case 3:
        season = "spring";
        break;
    case 4: case 5: case 6:
        season = "summer";
        break;
    case 7: case 8: case 9:
        season = "fall"
        break;
    case 10: case 11: case 12:
        season = "winter"
        break;
    default:
        season = "Invalid month";
        break;
}  
console.log(season);