let categoryList = [];

class Category {
    constructor(name) {
        this.name = name;
        this.food = [];
    }
};

class Food {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
};

function addFoodToCategory(categoryList) {
    var _name = prompt("Enter food name to add: ");
    let price = +prompt("Enter price of food: ");
    let description = prompt("Enter description: ");
    let dish = new Food(_name, price, description);
    _name = prompt("Enter category name to push: ");
    var founded = categoryList.find(category => category.name === _name);
    if (!founded) {
        founded = new Category(_name);
        categoryList.push(founded);
        console.log(`New category "${_name}" created.`);
    }
    founded.food.push(dish);
    console.log("Add food to category success!!");
};

function delFood() {
    _name = prompt("Enter category name to del: ");
    founded = categoryList.find(category => category.name === _name);
    if (founded) {
        _name = prompt("Enter food name to delete: ");
        founded.food = founded.food.filter(food => food.name !== _name);
        console.log("Delete success!!");
    } else {
        console.log("Category not found");
    }
};

function updateFood() {
    _name = prompt("Enter food name to update: ");
    founded = categoryList.find(category => category.food.some(food => food.name === _name));
    if (founded) {
        _name = prompt("Enter new name: ");
        let price = +prompt("Enter new price: ");
        let description = prompt("Enter new description: ");
        founded.food = founded.food.map(food => food.name === _name ? new Food(_name, price, description) : food);
        console.log("Update success!!");
    } else {
        console.log("Food not found");
    }
};

function displayAll() {
    // console.table(categoryList);
    if (categoryList.length === 0) {
        console.log("No categories available to display.");
        return;
    }
    console.log("Menu:");
    console.log("==========================================");
    categoryList.forEach(category => {
        console.log(`Category: ${category.name}`);
        if (category.food.length > 0) {
            category.food.forEach(food => {
                console.log(`  - Food: ${food.name}`);
                console.log(`    Price: ${food.price}`);
                console.log(`    Description: ${food.description}`);
            });
        } else {
            console.log("  No food items in this category.");
        }
        console.log("==========================================");
    });
};

function searchFood() {
    _name = prompt("Enter food name to search: ");
    founded = categoryList.find(category => category.food.some(food => food.name === _name));
    if (founded) {
        console.table(founded.food);
    } else {
        console.log("Food not found");
    }
};

let run = true;
while (run) {
    let choice = +prompt(`
        MENU
        ===========================================
        1. Thêm món ăn vào danh mục.
        2. Xóa món ăn theo tên khỏi danh mục.
        3. Cập nhật thông tin theo tên của món ăn (tên, giá, mô tả).
        4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
        5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
        6. Thoát
        ===========================================
        Enter your choice: `);
    switch (choice) {
        case 1:
            addFoodToCategory(categoryList);
            break;
        case 2:
            delFood();
            break;
        case 3:
            updateFood();
            break;
        case 4:
            displayAll();
            break;
        case 5:
            searchFood();
            break;
        case 6:
            run = false;
            console.log("Out of program");
            break;
        default:
            console.log("Invalid! Enter again!!");
            break;
    }
}