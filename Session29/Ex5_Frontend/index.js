let users = [];

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    validateEmail() {
        return this.email.includes('@') && (this.email.endsWith('.com') || this.email.endsWith('.vn'));
    }
    validatePassword() {
        return this.password.length >= 6 && /[A-Z]/.test(this.password) && /[a-z]/.test(this.password) && /[!@#$%^&*]/.test(this.password);
    }
    checkEmailExist() {
        return users.some(user => user.email === this.email);
    }
};

function registerUser() {
    let name = prompt("Enter your name: ");
    let email = prompt("Enter your email: ");
    let password = prompt("Enter your password: ");
    let user = new User(name, email, password);
    if (!user.validateEmail() && !user.validatePassword()) {
        alert("Invalid email or password");
        return;
    }
    if (user.checkEmailExist()) {
        alert("Email already exists");
        return;
    }
    users.push(user);
    alert("Register successful");
};

function loginUser() {
    let email = prompt("Enter your email: ");
    let password = prompt("Enter your password: ");
    let user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        alert("Invalid email or password");
        return;
    }
    alert(`Welcome, ${user.name}`);
};

function logoutUser() {
    users = [];
    alert("Logged out");
};

let run = true;

while (run) {
    let choice = +prompt(`
        MENU
        =========================
        1. Register
        2. Login
        3. Logout
        4. Exit
    `);
    switch (choice) {
        case 1:
            registerUser();
            break;
        case 2:
            loginUser();
            break;
        case 3:
            logoutUser();
            break;
        case 4:
            run = false;
            alert("Out of program!!");
            break;
        default:
            alert("Invalid choice");
    }
}