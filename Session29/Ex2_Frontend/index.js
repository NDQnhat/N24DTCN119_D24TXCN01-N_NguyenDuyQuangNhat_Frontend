let productList = [];
class product {
    constructor(id, name, price, category, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
    }
};

function addProduct(productList, product) {
    let id = prompt("Enter id: ");
    let name = prompt("Enter name: ");
    let price = +prompt("Enter price: ");
    let category = prompt("Enter category: ");
    let quantity = +prompt("Enter quantity: ");
    productList.push(new product(id, name, price, category, quantity));
};

console.table(productList);
function displayProduct(product) {
    console.table(productList);
};

function updateProduct(productList, product) {
    var search = prompt("Enter id to product to show: ");
    var founded = productList.find(product => product.id === search);
    if (founded) {
        console.log(founded);
    } else {
        console.log("Product not found!!");
    }
};

function updateInfo(productList, product) {
    search = prompt("Enter id to update: ");
    // founded = productList.find(product => product.id === search);
    founded = productList.findIndex(product => product.id === search);
    if (founded) {
        // founded.name = prompt("Enter new name: ");
        // founded.price = +prompt("Enter new price: ");
        // founded.category = prompt("Enter new category: ");
        // founded.quantity = +prompt("Enter new quantity: ");
        let _name = prompt("Enter new name: ");
        let _price = +prompt("Enter new price: ");
        let _category = prompt("Enter new category: ");
        let _quantity = +prompt("Enter new quantity: ");
        productList[founded].name = _name;
        productList[founded].price = _price;
        productList[founded].category = _category;
        productList[founded].quantity = _quantity;
        console.log("Update success");
    } else {
        console.log("Product not found");
    }
};

function deleteProduct(productList, product) {
    search = prompt("Enter id to delete: ");
    founded = productList.findIndex(product => product.id === search);
    if (founded !== -1) {
        productList.splice(founded, 1);
        console.log("Del success");
    } else {
        console.log("Product not found!!");
    }
};

function filterCost(productList, minPrice, maxPrice) {
    let minPrice = +prompt("Enter min price: ");
    let maxPrice = +prompt("Enter max price: ");
    let result = productList.filter(product => product.price >= minPrice && product.price <= maxPrice);
    console.table(result);
};

let run = true;
while (run) {
    let command = +prompt(`
        MENU
        ===========================================
        1. Thêm sản phẩm vào danh sách sản phẩm.
        2. Hiển thị tất cả sản phẩm.
        3. Hiển thị chi tiết sản phẩm theo id.
        4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
        5. Xóa sản phẩm theo id.
        6. Lọc sản phẩm theo khoảng giá.
        7. Thoát.
        ==========================================
        Enter your choice: `);
    switch (command) {
        case 1:
            addProduct(productList, product);
            break;
        case 2:
            displayProduct(productList, product);
            break;
        case 3:
            updateProduct(productList, product);
            break;
        case 4:
            updateInfo(productList, product);
            break;
        case 5:
            deleteProduct(productList, product);
            break;
        case 6:
            filterCost(productList, product);
            break;
        case 7:
            run = false;
            console.log("Out of program");
            break;
        default:
            console.log("Invalid command. Enter again!!");
            break;
    }
}