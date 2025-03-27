function isStrongPassword(params) {
    if(params.length < 8)   return false;
    if(/[a-z]/.test(params) == false)   return false;
    if(/[A-Z]/.test(params) == false)   return false;
    if(/[0-9]/.test(params) == false)   return false;
    // if(/[!@#$%^&*()]/.test(params) == false) return false;
    return true;
}
let string = "Abc123!@";
console.log(isStrongPassword(string));
string = "weakpass";
console.log(isStrongPassword(string));