let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "Món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "Món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "Món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đuậ xanh",
        price: 60000,
        quantity: 30,
        category: "Món ăn dân tộc Kinh",
    }
];

class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }
};
var _cart = new Cart();


function showProductsByCategory(category) {
    let result = products.filter(product => product.category === category);
    if (result.length > 0) {
        console.log("List of products in category: ", category);
        result.forEach(product => console.log(product.id, product.name, product.price));
    } else {
        console.log("No product found in this category.");
    }
};

function addToCart(productId) {
    let product = products.find(product => product.id === productId);
    let _quantity = +prompt("Enter a quantity to buy: ");
    if (product && product.quantity > _quantity) {
        _cart.items.push(product);
        console.log("Product added to cart: ", product.name);
        product.quantity -= _quantity;
        _cart.totalPrice += product.price * _quantity;
    } else {
        console.log("Out of stock.");
    }
};

function arrangeProduct(product) {
    let choice = +prompt("1. Ascending   2. Descending");
    if (choice === 1) {
        products.sort((a, b) => a.price - b.price);
        console.log("List of products sorted by price:");

    } else if (choice === 2) {
        products.sort((a, b) => b.price - a.price);
        console.log("List of products sorted by price (descending):");
    } else {
        console.log("Invalid choice.");
    }
    products.forEach(product => console.log(product.id, product.name, product.price));
};



let run = true;
while (run) {
    let command = +prompt(`
        1. Hiển thị các sản phẩm theo tên danh mục.
        2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá:
        4. Tính số tiền thanh toán trong giỏ hàng.
        5. Thoát.
    `);
    switch (command) {
        case 1:
            let category = prompt("Enter category: ");
            showProductsByCategory(category);
            break;
        case 2:
            let productId = +prompt("Enter product id: ");
            addToCart(productId);
            break;
        case 3:
            arrangeProduct(products);
            break;
        case 4:
            console.log(`total price: ${_cart.totalPrice}`);
            break;
        case 5:
            run = false;
            console.log("Out of program!!!");
            break;
        default:
            console.log("Invalid. Enter again!");
    }
}