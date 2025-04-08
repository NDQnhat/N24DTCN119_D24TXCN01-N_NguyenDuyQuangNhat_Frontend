let todoList = [
    {
        id: 1,
        task: 'Hit the gym',
        completed: false,
    },
    {
        id: 2,
        task: 'Pay bills',
        completed: true,
    },
    {
        id: 3,
        task: 'Meet george',
        completed: false,
    },
    {
        id: 4,
        task: 'Buy eggs',
        completed: false,
    },
    {
        id: 5,
        task: 'Read a book',
        completed: false,
    },
    {
        id: 6,
        task: 'Organize office',
        completed: false,
    },
];

let list = document.querySelector("ul");
todoList.forEach((todo) => {
    let li = document.createElement("li");
    // li.classList.add(".close")
    li.innerHTML = `${todo.task} <span class="close">X</span></li>`;
    list.appendChild(li);
});

addTodo = function () {
    let input = document.querySelector("input[type='text']");
    let li = document.createElement("li");
    li.setAttribute("id", todoList.length + 1);
    li.innerHTML = `${input.value} <span class="close">X</span>`;
    list.appendChild(li);
    todoList.push({ id: todoList.length + 1, task: input.value, completed: false });
    input.value = "";
};

// let delBtn = document.querySelectorAll(".close");
// delBtn.forEach((btn) => {
//     btn.addEventListener("click", function () {
//         let li = this.parentElement;
//         let todoId = +(li.getAttribute("id"));
//         list.removeChild(li);
//         todoList = todoList.filter((todo) => todo.id !== todoId);
//     });
// });

list.addEventListener("click", function (event) {
    if (event.target.classList.contains("close")) {
        let li = event.target.parentElement;
        let todoId = parseInt(li.getAttribute("id"));
        list.removeChild(li);
        todoList = todoList.filter((todo) => todo.id !== todoId);
    }
});