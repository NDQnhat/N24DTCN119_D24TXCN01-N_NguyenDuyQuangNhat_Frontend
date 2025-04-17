let inputField = document.getElementById("input");
let helloField = document.getElementById("hello");
let _name = JSON.parse(localStorage.getItem("your-name")) || ""
if(_name) {
    showWhat(false);
}

document.getElementById("save-btn").addEventListener("click", function () {
    _name = document.getElementById("name").value;
    if (_name !== "") {
        showWhat(0);
        localStorage.setItem("your-name", JSON.stringify(_name));
    } else {
        alert("Tên không được trống!!");
    }
});

function showWhat(flag) {
    if (flag) {
        inputField.classList.remove("d-none");
        inputField.classList.add("d-flex");

        helloField.classList.remove("d-flex");
        helloField.classList.add("d-none");
    } else {
        inputField.classList.remove("d-flex");
        inputField.classList.add("d-none");

        helloField.classList.remove("d-none");
        helloField.classList.add("d-flex");
        document.getElementById("your-name").innerHTML = _name + " là tôi";
    }
}
document.getElementById("rename").addEventListener("click", () => {showWhat(true)});
