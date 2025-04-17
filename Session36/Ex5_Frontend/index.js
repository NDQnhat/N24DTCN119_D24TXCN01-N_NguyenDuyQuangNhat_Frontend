let pendingTasks = JSON.parse(localStorage.getItem("pendingTasks")) || [];
let inProgressTasks = JSON.parse(localStorage.getItem("inProgressTasks")) || [];
let doneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];

const taskLists = {
    pendingTasks,
    inProgressTasks,
    doneTasks
};
function getArrayName(array) {
    for (let key in taskLists) {
        if (taskLists[key] === array) {
            return key;
        }
    }
    return null;
};

renderList = (list, isCompleted = false) => {
    let html = "";
    if (!isCompleted) {
        list.forEach(element => {
            html += `<div class="task">
                        <p>${element}</p>
                        <button data-name = "${element}" data-array = "${getArrayName(list)}" class="forward-btn">Chuyển tiếp</button>
                    </div>`;
        });
    } else {
        list.forEach(element => {
            html += `<div class="task">
                        <p>${element}</p>
                    </div>`;
        });
    }
    document.getElementById(`${getArrayName(list)}`).innerHTML = html;
};
renderList(pendingTasks);
renderList(inProgressTasks);
renderList(doneTasks, true);

addTask = function () {
    let taskName = document.getElementById("taskName").value.trim();
    if (taskName === "") {
        alert("Task Name cannot empty!!!");
        document.getElementById("taskName").value = "";
        return;
    }
    pendingTasks.push(taskName);
    localStorage.setItem("pendingTasks", JSON.stringify(pendingTasks));
    renderList(pendingTasks, false);
};

document.getElementById("board").addEventListener("click", function (event) {
    if (event.target.classList.contains("forward-btn")) {
        // event.preventDefault();
        let _taskName = event.target.getAttribute("data-name");
        let currentArrayName = event.target.getAttribute("data-array");

        if (currentArrayName === "pendingTasks") {
            pendingTasks = pendingTasks.filter(task => task !== _taskName);
            inProgressTasks.push(_taskName);
            localStorage.setItem("pendingTasks", JSON.stringify(pendingTasks));
            localStorage.setItem("inProgressTasks", JSON.stringify(inProgressTasks));
            renderList(pendingTasks);
            renderList(inProgressTasks);
        } else if (currentArrayName === "inProgressTasks") {
            inProgressTasks = inProgressTasks.filter(task => task !== _taskName);
            doneTasks.push(_taskName);
            localStorage.setItem("inProgressTasks", JSON.stringify(inProgressTasks));
            localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
            renderList(inProgressTasks);
            renderList(doneTasks, true);
        }
    }
});