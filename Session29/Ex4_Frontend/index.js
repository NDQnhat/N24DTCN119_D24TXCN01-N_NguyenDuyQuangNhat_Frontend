let todoList = [];

class Work {
    constructor(id, name, description, timeStart, status) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.timeStart = timeStart;
        this.status = status;
    }
};

function addWork(todoList) {
    let id = todoList.length + 1;
    var _name = prompt("Enter name of task: ");
    let description = prompt("Enter description of task: ");
    let timeStart = prompt("Enter time start of task (DD/MM/YYYY): ");
    let status = +prompt("Enter status of task (1 for completed/ 0 for incomplete): ");
    status = status ? "Completed" : "Incomplete";
    let work = new Work(id, _name, description, timeStart, status);
    todoList.push(work);
};

function displayWork(todoList) {
    console.table(todoList);
};

function updateWork(todoList) {
    let search = +prompt("Enter Id of task: ");
    var founded = todoList.find(work => work.id === search);
    if (founded) {
        // founded.status =!founded.status;
        // founded.status = founded.status ? "Completed" : "Incomplete";
        founded.status = (founded.status === "Completed") ? "Incomplete" : "Completed";
        console.log("Status of task updated");
        displayWork(todoList);
    } else {
        console.log("Task not found!");
    }
};

function filterWork(todoList) {
    search = +prompt("Enter status of task (1 for completed/ 0 for incomplete): ");
    search = search ? "Completed" : "Incomplete";
    founded = todoList.filter(work => work.status === search);
    if (founded.length > 0) {
        console.log("Task found for: " + search);
        console.table(founded);
    } else {
        console.log("No Results");
    }
};

function sortWork(todoList) {
    todoList.sort((a, b) => {
        if (a.status < b.status) return -1;
        if (a.status > b.status) return 1;
        return 0;
    });
    console.log("Task sorted by status");
};

let run = true;

while (run) {
    let command = +prompt(`
        1. Thêm công việc mới.
        2. Hiển thị tất cả các công việc.
        3. Cập nhật trạng thái công việc theo id.
        4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
        5. Sắp xếp các công việc theo trạng thái công việc.
        6. Thoát
        Enter the command: `);
    switch (command) {
        case 1:
            addWork(todoList);
            break;
        case 2:
            displayWork(todoList);
            break;
        case 3:
            updateWork(todoList);
            break;
        case 4:
            filterWork(todoList);
            break;
        case 5:
            sortWork(todoList);
            break;
        case 6:
            run = false;
            console.log("Out of program");
            break;
        default:
            console.log("Invalid command. Enter again!");
            break;
    }
}   