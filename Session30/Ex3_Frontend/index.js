let _cart = [];
let phoneList = [
    { id: 1, name: "Iphone 15", price: 2000, quantity: 10, company: "Apple" },
    { id: 2, name: "Iphone 14", price: 1500, quantity: 5, company: "Apple" },
    { id: 3, name: "Galaxy S21", price: 1200, quantity: 8, company: "Samsung" },
    { id: 4, name: "Galaxy S20", price: 1000, quantity: 12, company: "Samsung" },
    { id: 5, name: "Iqoo neo 9", price: 1800, quantity: 15, company: "Vivo" },
    { id: 6, name: "K70 pro", price: 2500, quantity: 7, company: "Xiaomi" },
];

class phone {
    constructor(id, name, price, quantity, company) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.company = company;
    }
}

class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }
};

function displayPhoneByCompany(company) {
    var search = phoneList.filter(phone => phone.company.toLowerCase() === company.toLowerCase());
    if (search.length > 0) {
        console.log("List of phones in company: ", company);
        search.forEach(phone => console.log(phone.id, phone.name, phone.price, phone.quantity));
    } else {
        console.log("Company not have phone");
    }
};

function addPhoneToStore() {
    let id = +prompt("Enter phone id: ");
    let name = prompt("Enter phone name: ");
    let price = +prompt("Enter phone price: ");
    let quantity = +prompt("Enter phone quantity: ");
    let company = prompt("Enter phone company: ");
    let newPhone = new phone(id, name, price, quantity, company);
    phoneList.push(newPhone);
    console.log("Add new phone success!");
};

function searchPhone() {
    let keyword = prompt("Enter phone name or id: ");
    let search = phoneList.filter(phone => phone.name.toLowerCase().includes(keyword.toLowerCase()) || phone.id === +keyword);
    if (search.length > 0) {
        console.log("List of phones found: ");
        search.forEach(phone => console.log(phone.id, phone.name, phone.price, phone.quantity, phone.company));
    } else {
        console.log("Not found any phone!!!");
    }
};

function buyPhone() {
    let id = +prompt("Enter phone id: ");
    let quantity = +prompt("Enter phone quantity: ");
    var founded = phoneList.find(phone => phone.id === id);
    if (founded) {
        if (founded.quantity >= quantity) {
            founded.quantity -= quantity;
            _cart.push({ ...founded, quantity });
            console.log("Buy phone success!");
        } else {
            console.log("Not enough quantity to buy!");
        }
    } else {
        console.log("Not found any phone!!!");
    }
};

function payAll() {
    var total = _cart.reduce((acc, phone) => acc + (phone.price * phone.quantity), 0);
    console.log("Total price of all phones in cart: ", total);
    _cart = []; // xoa' gio? hang` sau khi thanh toan'
};

function arrangePhone() {
    let choice = +prompt("1. Ascending   2. Descending");
    if (choice === 1) {
        phoneList.sort((a, b) => a.price - b.price);
        console.log("List of phones sorted by price ascending: ");
        phoneList.forEach(phone => console.log(phone.id, phone.name, phone.price, phone.quantity));
    } else if (choice === 2) {
        phoneList.sort((a, b) => b.price - a.price);
        console.log("List of phones sorted by price descending: ");
        phoneList.forEach(phone => console.log(phone.id, phone.name, phone.price, phone.quantity));
    } else {
        console.log("Invalid choice");
    }
}; 

function totalPriceOfPhones() {
    total = phoneList.reduce((acc, phone) => acc + (phone.price * phone.quantity), 0);
    console.log("Total price of all phones in store: ", total);
};

function totalQuantityOfPhones() {
    total = phoneList.reduce((acc, phone) => acc + phone.quantity, 0);
    console.log("All quantity of phone in store: ", total);
};

function totalQuantityOfPhonesByCompany() {
    let company = prompt("Enter company name: ");
    let search = phoneList.filter(phone => phone.company === company);
    if (search.length > 0) {
        let total = search.reduce((acc, phone) => acc + phone.quantity, 0);
        console.log("Total quantity of phones in company: ", total);
    } else {
        console.log("Company not have phone");
    }
};




let run = true;
while (run) {
    let choice = +prompt(`
        MENU
        ===========================================
        1. Hiển thị danh sách điện thoại theo hãng
        2. Thêm điện thoại mới vào cửa hàng
        3. Tìm kiếm điện thoại theo tên hoặc id
        4. Mua điện thoại
        5. Thanh toán tất cả điện thoại trong giỏ hàng
        6. Sắp xếp điện thoại theo giá
        7. Hiển thị tổng số tiền của các điện thoại trong kho
        8. Hiển thị tổng số lượng điện thoại theo từng hãng 
        9. Thoát chương trình
        ===========================================
        Enter your choice: `);
    switch (choice) {
        case 1:
            let company = prompt("Enter company name: ");
            displayPhoneByCompany(company);
            break;
        case 2:
            addPhoneToStore();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            payAll();
            break;
        case 6:
            arrangePhone();
            break;
        case 7:
            totalPriceOfPhones();
            break;
        case 8:
            totalQuantityOfPhonesByCompany();
            break;
        case 9:
            run = false;
            console.log("Out of program");
            break;
        default:
            console.log("Invalid! Enter again!!");
            break;
    }
}