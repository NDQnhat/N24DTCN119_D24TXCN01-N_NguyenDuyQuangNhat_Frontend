let categoryList = JSON.parse(sessionStorage.getItem("categoryList")) || [
    {
        id: "DM001",
        name: "Quần áo",
        status: "Đang hoạt động",
    },
    {
        id: "DM002",
        name: "Kính mát",
        status: "Ngừng hoạt động",
    },
    {
        id: "DM003",
        name: "Giày dép",
        status: "Đang hoạt động",
    },
    {
        id: "DM004",
        name: "Thời trang nam",
        status: "Ngừng hoạt động",
    },
    {
        id: "DM005",
        name: "Thời trang nữ",
        status: "Ngừng hoạt động",
    },
    {
        id: "DM006",
        name: "Hoa quả",
        status: "Ngừng hoạt động",
    },
    {
        id: "DM007",
        name: "Rau ",
        status: "Đang hoạt động",
    },
    {
        id: "DM008",
        name: "Điện thoại",
        status: "Ngừng hoạt động",
    },
];

renderList = function(list) {
    let html = "";
    list.forEach(element => {
        html += `<tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.status}</td>
                    <td><i class="fa-light fa-trash del-btn mx-3"></i><i class="fa-light fa-pen-to-square edit-btn mx-3"></i></td>
                </tr>`
    });
    document.getElementById("table-body").innerHTML = html;
};

renderList(categoryList);

document.getElementById("status").addEventListener("change", function() {
    let $status = document.getElementById("status").value;
    let filterArray = categoryList.filter(element => element.status === $status);
    // console.log(filterArray);
    
    renderList(filterArray);
});

addCategory = function() {
    let categoryId = document.getElementById("category-id").value.trim();
    let categoryName = document.getElementById("category-name").value.trim();
    let elements = document.getElementsByName("status");
    let checkValue = "";
    let hasError = false;

    if (categoryId === "") {
        document.getElementById("checkId").classList.remove("d-none");
        document.getElementById("checkId").classList.add("d-block");
        document.getElementById("checkId").classList.add("text-danger");
        hasError = true;
    } else {
        document.getElementById("checkId").classList.remove("d-block");
        document.getElementById("checkId").classList.add("d-none");
    }

    if (categoryName === "") {
        document.getElementById("checkName").classList.remove("d-none");
        document.getElementById("checkName").classList.add("d-block");
        document.getElementById("checkName").classList.add("text-danger");
        hasError = true;
    } else {
        document.getElementById("checkName").classList.remove("d-block");
        document.getElementById("checkName").classList.add("d-none");
    }

    for (let i = 0; i < elements.length; i++) {
        if (elements.item(i).checked) {
            checkValue = elements.item(i).value;
        }
    }

    if (hasError) {
        document.getElementById("close-modal").removeAttribute("data-bs-dismiss");
        return;
    }

    // document.getElementById("close-modal").setAttribute("data-bs-dismiss", "modal");

    categoryList.push({ id: categoryId, name: categoryName, status: checkValue });
    sessionStorage.setItem("categoryList", JSON.stringify(categoryList));
    renderList(categoryList);

    document.getElementById("category-id").value = "";
    document.getElementById("category-name").value = "";
    elements.forEach(element => (element.checked = false));
};