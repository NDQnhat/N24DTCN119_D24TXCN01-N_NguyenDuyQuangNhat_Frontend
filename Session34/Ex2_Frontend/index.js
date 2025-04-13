let courses = JSON.parse(sessionStorage.getItem("courses")) || [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Anh Bách',
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Lâm th`',
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiếu Ci Ớt Ớt',
    },
];

function renderTasks() {
    let html = "";
    courses.forEach((task) => {
        html += `<tr>
                    <th scope="row">${task.id}</th>
                    <td>${task.content}</td>
                    <td>${task.dueDate}</td>
                    <td>${task.status}</td>
                    <td>${task.assignedTo}</td>
                    <td><button class="edit-btn" data-id="${task.id}" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Sửa</button></td>
                    <td><button class="del-btn" data-id="${task.id}">Xóa</button></td>
                </tr>`
    });
    document.getElementById("table-body").innerHTML = html;
};
renderTasks();

function addTask() {
    let content = document.getElementById("content").value;
    let date = document.getElementById("date").value;
    let status = document.getElementById("status").value;
    let username = document.getElementById("username").value;

    courses.push({
        id: courses.length + 1,
        content: content,
        dueDate: date,
        status: status,
        assignedTo: username,
    });
    renderTasks();
    sessionStorage.setItem("courses", JSON.stringify(courses));
};

let delBtn = document.querySelectorAll(".del-btn");

// delBtn.forEach((btn) => {
//     btn.addEventListener("click", function(event){
//         event.preventDefault();
//         let id = this.getAttribute("data-id");
//         id = +id;
//         courses = courses.filter(element => element.id !== id);
//         renderTasks();
//         delBtn = document.querySelectorAll(".del-btn");
//     }); 
// });

document.getElementById("table-body").addEventListener("click", function (event) {
    if (event.target.classList.contains("del-btn")) {
        let id = +(event.target.getAttribute("data-id"));
        courses = courses.filter(element => element.id !== id);
        renderTasks();
        sessionStorage.setItem("courses", JSON.stringify(courses));
    }
});

document.getElementById("table-body").addEventListener("click", function (event) {
    if (event.target.classList.contains("edit-btn")) {
        let id = +(event.target.getAttribute("data-id"));
        let found = courses.find(element => element.id === id);
        if (found) {
            document.getElementById("edit-content").value = found.content;
            document.getElementById("edit-date").value = found.dueDate;
            document.getElementById("edit-status").value = found.status;
            document.getElementById("edit-username").value = found.assignedTo;

            document.getElementById("save-changes-btn").setAttribute("data-id", id);
        }
    }
});
// document.getElementById("table-body").addEventListener("click", function (event) {
//     if (event.target.classList.contains("edit-btn")) {
//         let id = +(event.target.getAttribute("data-id"));
        
//     }
// });

function saveChange() {
    let editId = +(document.getElementById("save-changes-btn").getAttribute("data-id"));
    let found = courses.find(element => element.id === editId);
    if (found) {
        let content = document.getElementById("edit-content").value;
        let dueDate = document.getElementById("edit-date").value;
        let status = document.getElementById("edit-status").value;
        let assignedTo = document.getElementById("edit-username").value;

        found.content = content;
        found.dueDate = dueDate;
        found.status = status;
        found.assignedTo = assignedTo;

        renderTasks();
        sessionStorage.setItem("courses", JSON.stringify(courses));
    }
}