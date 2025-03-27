let users = [];
function isValid(email) {
    if(!email.includes("@"))      return false;
    // if((!email.includes(".com" || ".vn")) && ((email[email.length - 4] !== "." && (email[email.length - 4] !== "c")) || (email[email.length - 3] !== "." && (email[email.length - 2] !== "v"))) ) return false;
    if(!(email.endsWith(".com") || email.endsWith(".vn"))) return false;
    if(users.includes(email))     return false;
    return true;
};

let inp = prompt("Enter your email: ");
if(isValid(inp)) {
    alert("Valid email");
    users.push(inp);
} else {
    alert("Invalid email");
}