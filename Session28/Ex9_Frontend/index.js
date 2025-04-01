let library = [];
class book {
    constructor(id, title, author, year, price, isAvailable) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.price = price;
        this.isAvailable = isAvailable;
    }
};

function addBook(library) {
    let id = prompt("Enter book ID:");
    let title = prompt("Enter book title:");
    let author = prompt("Enter book author:");
    let year = +prompt("Enter book year:");
    let price = +prompt("Enter book price:");
    let isAvailable = prompt("Enter status: available or not? (true/false)");
    library.push(new book(id, title, author, year, price, isAvailable));
};

function showBookList(library) {
    for (let book of library) {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Price: ${book.price}, Available: ${book.isAvailable ? "Có sẵn" : "Hết sách"}`);
    }
    console.table(library);
};

function searchTitle(library) {
    let searchTitle = prompt("Enter book title to search:");
    let founded = false;
    for (let book of library) {
        if (book.title === searchTitle) {
            console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Price: ${book.price}, Available: ${book.isAvailable}`);
            founded = true;
        }
    }
    if (!founded) {
        console.log("Book not found");
    }
};

function updateStatus(library) {
    var searchId = prompt("Enter book ID to update:");
    let updatedBook = library.find(book => book.id === searchId);
    if (updatedBook) {
        updatedBook.isAvailable = !updatedBook.isAvailable;
        console.log("Book status updated");
    } else {
        console.log("Book not found");
    }
};

function deleteBook(library) {
    searchId = prompt("Enter book ID to delete:");
    let index = library.findIndex(book => book.id === searchId);
    if (index > -1) {
        library.splice(index, 1);
        console.log("Del success!!");
    } else {
        console.log("Book not found");
    }
};


let flag = true;

while (flag) {
    let command = +prompt(`
        1. Add a book
        2. Show book list
        3. Search book by title
        4. Update book status
        5. Delete book by id
        6. Sort book by price
        7. Exit
    `);
    switch (command) {
        case 1:
            addBook(library);
            break;
        case 2:
            showBookList(library);
            break;
        case 3:
            searchTitle(library);
            break;
        case 4:
            updateStatus(library);
            break;
        case 5:
            deleteBook(library);
            break;
        case 6:
            library.sort((a, b) => a.price - b.price);
            console.log("Book list sorted by price ascending");
            console.table(library);
            break;
        case 7:
            flag = false;
            console.log("Out of program!!");
            break;
        default:
            console.log("Invalid command!!");
            break;
    }
}