const password = "whyDoBirdFly";
let count = 3;
let inp;
while (count !== 0) {
  inp = prompt("Enter your password: ");
  if (inp === password) {
    console.log("Password correct");
    break;
  } else {
    console.log("Password incorrect");
    count--;
  }
  if(count === 0) {
    console.log("Password incorrect, you have no more chance");
  }
}