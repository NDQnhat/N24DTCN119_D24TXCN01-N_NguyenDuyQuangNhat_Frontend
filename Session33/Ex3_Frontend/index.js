let dish = [
    {name: "Rau sạch", category: "Đồ ăn"},
    {name: "Thịt lợn", category: "Đồ ăn"},
    {name: "Pépi không calo", category: "Nước"},
    {name: "Cocacola", category: "Nước"},
    {name: "Cờ lê", category: "Dụng cụ"},
    {name: "Tuy vít", category: "Dụng cụ"},
];

let input = document.getElementById("select");
let btn = document.getElementById("filter");
let ul = document.getElementById("list");

btn.addEventListener("click", function() {
    ul.innerHTML = "";
    let data = dish.filter(food => food.category === input.value);
    let html = "";
    data.forEach(element => {
        let li = document.createElement("li");
        html += `<li><b>Tên đồ ăn: </b>${element.name} <b>- Danh mục: </b>${element.category}</li>`;
        li.innerHTML = html;
        ul.appendChild(li);
        // html = "";
    });
});