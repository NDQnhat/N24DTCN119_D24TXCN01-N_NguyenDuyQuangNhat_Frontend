let list = []; 

class Contact {
    constructor(id, name, phone, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
};

function addContact(list) {
    let id = prompt("Enter id: ");
    let name = prompt("Enter name: ");
    let phone = prompt("Enter phone num: ");
    let email = prompt("Enter email: ");
    let _contact = new Contact(id, name, phone, email);
    list.push(_contact);
};

function displayList(list) {
    if (list.length === 0) {
        console.log("List empty!!");
    } else {
        console.log("Contact list: ");
        // for (let i = 0; i < list.length; i++) {
        //     console.log(`${list[i].id}. ${list[i].name} - ${list[i].phone} - ${list[i].email}`);
        // }
        console.table(list);
    }
};

function searchByPhone(list) {
    var search = prompt("Enter phone num to find:");
    let founded = list.find(contact => contact.phone === search);
    if (founded) {
        console.log(`Infor founded:`);
        console.log(`${founded.id}- ${founded.name} - ${founded.phone} - ${founded.email}`);
    } else {
        console.log("Cannot found in list!");
    }
};

function updateContact(list) {
    let search = prompt("Enter id update:");
    var index = list.findIndex(contact => contact.id === search);
    if (index !== -1) {
        let newName = prompt("New name: ");
        let newPhone = prompt("New phone number: ");
        let newEmail = prompt("New email: ");
        list[index].name = newName;
        list[index].phone = newPhone;
        list[index].email = newEmail;
        console.log("Updated!");
    } else {
        console.log("Cannot found!");
    }
};

function deleteContact(list) {
    let search = prompt("Enter id to del:");
    let index = list.findIndex(contact => contact.id === search);
    if (index !== -1) {
        list.splice(index, 1);
        console.log("Del success!");
    } else {
        console.log("Cannot found!!");
    }
};

let run = true;
while (run) {
    let command = +prompt(`
        1. Thêm đối tượng Contact vào danh sách liên hệ.
        2. Hiển thị danh sách danh bạ.
        3. Tìm kiếm thông tin Contact theo số điện thoại.
        4. Cập nhật thông tin Contact(name, email, phone) theo id.
        5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
        6. Thoát.
    `);
    switch (command) {
        case 1:
            addContact(list);
            break;
        case 2:
            displayList(list);
            break;
        case 3:
            searchByPhone(list);
            break;
        case 4:
            updateContact(list);
            break;
        case 5:
            deleteContact(list);
            break;
        case 6:
            run = false;
            console.log("Out of program!!!");
            break;
        default:
            console.log("Invalid. Enter again!");
    }
}