let bg_color = JSON.parse(localStorage.getItem("bg_color")) || "";

if(bg_color) {
    document.body.style.backgroundColor = bg_color;
}

document.getElementById("buttons").addEventListener("click", function(e) {
    if(e.target.classList.contains("btn")) {
        bg_color = e.target.getAttribute("value");
        document.body.style.backgroundColor = bg_color;
        localStorage.setItem("bg_color", JSON.stringify(bg_color));
    }
});