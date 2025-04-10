let products = [
    {
        imgSrc: "https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg",
        name: "Điện thoại Samsung Galaxy A54",
        price: 7490000,
    },
    {
        imgSrc: "https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053",
        name: "Laptop Dell Inspiron 15",
        price: 15990000,
    },
    {
        imgSrc: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836",
        name: "Tai nghe AirPods Pro",
        price: 4990000,
    },
    {
        imgSrc: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR2eDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNL3gwYlE3R0w4Z1RCbG9qQTd1MjYyL1owaE5aVCt2Ri82aDRacTg0bXlaZA",
        name: "Đồng hồ thông minh Apple Watch",
        price: 8990000,
    },
    {
        imgSrc: "https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg",
        name: "Máy ảnh Canon EOS M50",
        price: 12490000,
    },
    {
        imgSrc: "https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg?v=1732646465910",
        name: "Loa Bluetooth JBL Flip 5",
        price: 2190000,
    },
    {
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s",
        name: "Bàn phím cơ Logitech G Pro",
        price: 2490000,
    },
    {
        imgSrc: "https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png",
        name: "Chuột không dây Logitech MX Master",
        price: 1890000,
    },
];

let cart = [];
let totalPrice = 0;

let productsArea = document.getElementById("product-grid");

products.forEach((item) => {
    let product = document.createElement("div");
    product.className = "product-card";
    product.innerHTML += `
        <img src="${item.imgSrc}" alt="${item.name}" class="product-image">
        <h3>${item.name}</h3>
        <p class = "product-price">${item.price.toLocaleString()} ₫</p>
        <button class="add-to-cart" data-name="${item.name}" data-price="${item.price}">Thêm vào giỏ hàng</button>
    `;
    productsArea.appendChild(product);
});

let buyBtn = document.querySelectorAll(".add-to-cart");
let cartArea = document.getElementById("cart-area");
let isEmpty = document.getElementById("empty-cart");
let cartTotal = document.getElementById("cart-total");
let cartCount = document.getElementById("cart-count");
let cartItems = document.getElementById("cart-items");
let carts = [];

buyBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
        
    });
});
