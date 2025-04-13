// let info = JSON.parse(localStorage.getItem("email")) || "";
let info = localStorage.getItem("email");
info = info ? JSON.parse(info) : null;
let pass = localStorage.getItem("password");
pass = pass ? JSON.parse(pass) : null;

checkOutAndLogin = function() {
    let inputEmail = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;
    let printMistake = document.getElementById("mistake");
    
    if(inputEmail === info && inputPassword === pass) {
        alert("login success!!");
        printMistake.innerHTML = "";
        location.href = '../Ex2_Frontend/index.html';
    } else {
        printMistake.innerHTML = "Password incorrect!!";
    }
}

forgotPass = function() {
    alert("Không cho tạo lại đâu tự nhớ mật khẩu đi hihi")
}

// document.getElementById("signUp").addEventListener("click", function () {
//     location.href = "../Ex1_Frontend/index.html";
// });