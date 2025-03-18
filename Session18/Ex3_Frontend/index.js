let input = prompt("Log in please enter your name: ");
if(input === "ADMIN") {
    input = prompt("Enter password: ");
    if(input === "TheMaster") {
        alert("Welcome!!");
    } else if(input === "") {   //hay la` input==="null" hay iput ===null 
        alert("Cancelled");
    } else {
        alert("Wrong password.");
    }
} else if(input === "") {
    alert("Cancelled");
} else {
    alert("I Don’t know you");
}