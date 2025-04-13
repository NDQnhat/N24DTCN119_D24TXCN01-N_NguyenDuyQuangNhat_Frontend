// let info = JSON.parse(localStorage.getItem("email")) || "";
let info = localStorage.getItem("email");
info = info ? JSON.parse(info) : null;

checkOutAndRegister = function() {
    let inputEmail = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let printMistake = document.getElementById("mistake");
    
    if(inputEmail === info || confirmPassword !== inputPassword) {
        printMistake.innerHTML = "email was exists or confirm password wrong!!";
    } else { 
        localStorage.setItem("email", JSON.stringify(inputEmail));
        localStorage.setItem("password", JSON.stringify(inputPassword));
        printMistake.innerHTML = "";
        alert("Register successfully!!");
        location.href = '../Ex3_Frontend/index.html';
    }
}