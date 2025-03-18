let year = prompt("Enter a year to to check: ");
year = +year;
if(isNaN(year) || !Number.isInteger(year)) {       //TCN thi` la` nam am^ nen khong can check < 0
    alert("year must be an integer number");
} else if((year % 4 ===0 && year % 100 !== 0) || year % 400 === 0) {
    alert("Is a leap year");
} else {
    alert("Not a leap year");
}