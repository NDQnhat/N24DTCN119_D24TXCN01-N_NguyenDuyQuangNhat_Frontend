class Book {
    constructor(id, name, price, quantity, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
    }
};


let books = [
    new Book(1, "To Kill a Mockingbird", 19.99, 50, "Classic"),
    new Book(2, "1984", 12.99, 30, "Classic"),
    new Book(3, "The Great Gatsby", 14.99, 40, "Classic"),
    new Book(4, "The Catcher in the Rye", 11.99, 20, "Classic"),
    new Book(5, "Pride and Prejudice", 16.99, 60, "Classic"),
    new Book(6, "To Kill a Mockingbird", 19.99, 50, "Non-Fiction"),
    new Book(7, "1984", 12.99, 30, "Non-Fiction"),
];
let $cart = [];

class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }
};

function showBooksByCategory(category) {
    let filteredBooks = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
    for (let book of filteredBooks) {
        console.log(`${book.id}. ${book.name} - ${book.price} VND`);
    }
};

function addBookToCart(bookId, quantity) {
    let book = books.find(book => book.id === bookId);
    if (book && book.quantity >= quantity) {
        $cart.items.push(book);
        console.log(`Đã thêm ${quantity} cuốn ${book.name} vào gio hàng.`);
        book.quantity -= quantity;
        $cart.totalPrice += book.price * quantity;
    } else {
        console.log("Sản phẩm không số lượng hoặc không tồn tại.");
    }
};

function searchBook() {
    let keyword = prompt("Enter keyword to search: ");
    let foundBooks = books.filter(book => book.name.toLowerCase().includes(keyword.toLowerCase()) || book.id === parseInt(keyword));
    if (foundBooks.length > 0) {
        console.log("Danh sách sách tìm thấy:");
        for (let book of foundBooks) {
            console.log(`${book.id}. ${book.name} - ${book.price} VND`);
        }
    } else {
        console.log("Không tìm thấy sách nào.");
    }
};


function addBookToList() {
    let bookName = prompt("Enter book name: ");
    let price = +prompt("Enter book price: ");
    let quantity = +prompt("Enter book quantity: ");
    let category = prompt("Enter book category: ");
    books.push(new Book(books.length + 1, bookName, price, quantity, category));
    console.log("Add success");
};

function arrangeBook(books) {
    let choice = +prompt("1. Ascending   2. Descending");
    if (choice === 1) {
        books.sort((a, b) => a.price - b.price);
        console.log("Danh sách sách sắp xếp theo giá tăng dần:");
        for (let book of books) {
            console.log(`${book.id}. ${book.name} - ${book.price} VND`);
        }
        return;
    } else if (choice === 2) {
        books.sort((a, b) => b.price - a.price);
        console.log("Danh sách sách sắp xếp theo giá giảm dần:");
        for (let book of books) {
            console.log(`${book.id}. ${book.name} - ${book.price} VND`);
        }
        return;
    } else {
        console.log("Invalid choice");
        return;
    }
};

function showCart() {
    console.log("Giỏ hàng: ");
    for (let book of $cart.items) {
        console.log(`${book.id}. ${book.name} - ${book.price} VND - ${book.quantity} cuốn`);
    }
    console.log(`Tong tien: ${$cart.totalPrice} VND`);
};

function displayBooks() {
    console.log("Danh sách sách:");
    for (let book of books) {
        console.log(`${book.id}. ${book.name} - ${book.price} VND - ${book.quantity} cuốn - ${book.category}`);
    }
};



let run = true;
while (run) {
    let command = +prompt(`
        MENU
        ===========================================
        1. Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
        2. Thêm sách mới vào kho
        3. Tìm kiếm sách theo tên hoặc id.
        4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
        5. Sắp xếp sách theo giá:
        6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
        7. Hiển thị tổng số lượng sách trong kho.
        8. Thoát.
        ==========================================
        Enter your choice: `);
    switch (command) {
        case 1:
            let category = prompt("Enter category: ");
            showBooksByCategory(category);
            break;
        case 2:
            addBookToList();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            let bookId = +prompt("Enter book id: ");
            let quantity = +prompt("Enter quantity: ");
            addBookToCart(bookId, quantity);
            break;
        case 5:
            arrangeBook(books);
            break;
        case 6:
            showCart();
            break;
        case 7:
            // console.log(`Tong sach trong kho: ${books.reduce((acc, book) => acc + book.quantity, 0)}`);
            displayBooks();
            break;
        case 8:
            run = false;
            console.log("Out of program");
            break;
        default:
            console.log("Invalid command. Enter again!!");
            break;
    }
}