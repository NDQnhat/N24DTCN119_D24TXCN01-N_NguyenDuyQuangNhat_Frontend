const pi = Math.PI;
let command = 0;
let result = 0;
let r = 0; let a = 0; let b = 0;
while (command != 5) {
    command = +prompt(`
        ====================MENU===================
        1. Tính diện tích hình tròn.
        2. Tính chu vi hình tròn.
        3. Tính diện tích hình chữ nhật.
        4. Tính chu vi hình chữ nhật.
        5. Exit
    `);
    switch (command) {
        case 1:
            r = +prompt("Nhap ban kinh hinh tron: ");
            result = pi * r * r;
            alert(`Dien tich hinh tron la: ${result}`);
            break;
        case 2:
            r = +prompt("Nhap ban kinh hinh tron: ");
            result = pi * r * 2;
            alert(`Chu vi hinh tron la: ${result}`);
            break;
        case 3:
            a = +prompt("Nhap chieu dai hcn: ");
            b = +prompt("Nhap chieu rong hcn: ");
            result = a * b;
            alert(`Dien tich hinh chu nhat la: ${result}`);
            break;
        case 4:
            a = +prompt("Nhap chieu dai hcn: ");
            b = +prompt("Nhap chieu rong hcn: ");
            result = 2 * (a + b);
            alert(`Chu vi hinh chu nhat la: ${result}`); 
            break;
        case 5:
            alert("Out of program");
            break;
        default:
            alert("Invalid command");
            break;
    }
}