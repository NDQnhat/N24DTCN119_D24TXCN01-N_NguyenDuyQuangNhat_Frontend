let workList = JSON.parse(sessionStorage.getItem("workList")) || [
    {id: 1, name: "1212"},
];

renderWork = function() {
    let html = ""
    workList.forEach(work => {
        html += `<div class="d-flex justify-content-between bg-secondary">${work.name}<div class="d-flex gap-3"><button class="edit-btn" data-id='${work.id}'>Sửa</button><button data-id='${work.id}' class="del-btn">Xóa</button></div></div>`
    });
    document.getElementById("list").innerHTML = html;
    sessionStorage.setItem("workList", JSON.stringify(workList));
};

renderWork();

document.getElementById("list").addEventListener("click", function(event) {
    if(event.target.classList.contains("del-btn")) {
        let id = +(event.target.getAttribute("data-id"));
        workList = workList.filter(work => work.id !== id);
        renderWork();
    }
});

addWork = function () {
    let _work = document.getElementById("inp").value;
    workList.push({id: workList.length + 1, name: _work});
    renderWork();
};

document.getElementById("list").addEventListener("click", function(event) {
    if(event.target.classList.contains("edit-btn")) {
        let id = +(event.target.getAttribute("data-id"));
        let found = workList.find(work => work.id === id);
        if(found) {
            let editWork = prompt("Chỉnh sửa công việc", found.name);
            found.name = editWork;
            renderWork();
        }
    }
});