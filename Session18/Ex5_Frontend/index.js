let yearExp = prompt("Enter year of experience:");
yearExp = +yearExp;
if(yearExp < 1 && yearExp > 0) {
    alert("Newbie");
} else if(yearExp >=1 && yearExp <=3) {
    alert("Junior");
} else if(yearExp >=4 && yearExp <=6) {
    alert("Senior");
} else if(yearExp > 6){
    alert("Manage");
} else {
    alert("Invalid!!");
}