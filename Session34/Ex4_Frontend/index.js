let list = JSON.parse(localStorage.getItem("list")) || ["học js", "học local storage"];
let btn = document.getElementById("add-btn");
renderList = function() {
    let html = "";
    list.forEach(element => {
        html += `<tr>
                    <td>${element}</td>
                    <td><button class = "btn btn-danger del-btn" data-ele = "${element}">Xóa</button></td>
                </tr>`
    });
    document.getElementById("table-body").innerHTML = html;
    localStorage.setItem("list", JSON.stringify(list));
}
renderList();

btn.addEventListener("click", () => {
    let input = document.getElementById("work").value;
    list.push(input);
    renderList();
});

document.getElementById("table-body").addEventListener("click", function(event) {
    if(event.target.classList.contains("del-btn")) {
        let nameWork = event.target.getAttribute("data-ele");
        list = list.filter(work => work !== nameWork);
        renderList();
    }
});
