let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
];

let cart = [];

function showProducts() {
    // console.log(products);
    console.table(products);
}

function addToCart() {
    let productName = prompt("Enter product name: ");
    let productFound = products.find(product => product[0] === productName);
    
    if (productFound) {
        let quantity = +prompt(`Enter quantity to buy: `);
        
        if (quantity <= productFound[1]) {
            cart.push([productName, quantity, productFound[2]]);
            products[products.indexOf(productFound)][1] -= quantity;
        } else {
            console.log("Out of order!!");
        }
    } else {
        console.log("Product does not exist!");
    }
}

function doPayment() {
    let totalPrice = cart.reduce((total, item) => total + (item[1] * item[2]), 0);
    console.log(`
        Hóa đơn:
        - Sản phẩm: ${cart.map(item => item[0]).join(", ")}
        - Số lượng: ${cart.map(item => item[1]).join(", ")}
        - Thành tiền: ${totalPrice} VNĐ
    `);
    cart = [];
}

let command = 0;

while (command !== 4) {
    command = +prompt(`
        ===========================================
        1. Xem danh sách sản phẩm có sẵn trong cửa hàng.
        2. Chọn sản phẩm để mua bằng cách nhập tên sản phẩm.
        3. Tính tổng tiền và hiển thị hóa đơn.
        4. Thoát
        ===========================================
        Enter your choice: `);

    switch (command) {
        case 1:
            showProducts();
            break;
        case 2:
            addToCart();
            break;
        case 3:
            doPayment();
            break;
        case 4:
            console.log("Out of programming");
            break;
        default:
            console.log("Invalid! Enter again");
    }
}