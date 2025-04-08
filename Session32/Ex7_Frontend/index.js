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