let array = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space @out.com"]
let flag = true;

for(let email of array) {
    if(email.length === 0) {
        flag = false;
        break;
    }
}

if(flag) {
    let arr = array.filter(function(email) {
        return email.includes("@") && !email.includes(" ");
    });
    console.log(arr);
} else {
    console.log("Invalid data");
}