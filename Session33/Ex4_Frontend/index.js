let products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        // image: 'https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=1leg6QdLFs2iTA&pid=ImgRaw&r=0',
        image: 'https://th.bing.com/th/id/R.06db7f087c1ed0c36f066fb187ff580e?rik=XxVF6t80fk11Ew&pid=ImgRaw&r=0',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://th.bing.com/th/id/OIP.seDkZ7w_josZda-_44JlyQHaE8?rs=1&pid=ImgDetMain',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv36f0uj8xuaf',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://th.bing.com/th/id/OIP.D-JzpkvWrxWEVWIbpm87rAHaHa?rs=1&pid=ImgDetMain',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
    },
];

let btn = document.getElementById("btn");
let input = document.getElementById("input");
let cards = document.getElementById("cards");

function displayProducts(data) {
    cards.innerHTML = ""; // Xóa nội dung cũ trước khi thêm nội dung mới
    data.forEach(product => {
        let card = `
            <div class="col-lg-2 mb-4">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="text-success fw-bold">${new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND'
                        }).format(product.price)}</p>
                    </div>
                    <div class="card-footer text-center">
                        <button class="btn btn-primary">Mua ngay</button>
                    </div>
                </div>
            </div>
        `;
        cards.insertAdjacentHTML("beforeend", card);
    });
}

displayProducts(products);

// btn.addEventListener("click", () => {
//     let searchValue = input.value.toLowerCase();
//     let filteredProducts = products.filter(product =>
//         product.name.toLowerCase().includes(searchValue)
//     );
//     displayProducts(filteredProducts);
// });
