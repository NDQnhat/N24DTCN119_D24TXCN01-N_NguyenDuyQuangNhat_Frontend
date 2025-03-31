const pi = Math.PI;
let command = 0;
let result = 0;
let quantity = 0;
let array = [];
while (command != 5) {
    command = +prompt(`
        ====================MENU===================
        1. Nhập danh sách số nguyên.
        2. Tính trung bình các số.
        3. Tìm số chẵn lớn nhất.
        4. Tìm số lẻ nhỏ nhất.
        5. Exit
    `);
    switch (command) {
        case 1:
            quantity = +prompt("Enter quantity number input: ");
            for (let i = 0; i < quantity; i++) {
                array[i] = +prompt(`Enter number ${i + 1}: `);
            }
            break;
        case 2:
            result = 0;
            result = (array.reduce((acc, element) => acc + element)) / quantity;
            alert(`Trung binh cac so la: ${result}`);
            break;
        case 3:
            result = array[0];
            array.forEach((element) => {
                if (element % 2 == 0 && (element > result)) {
                    result = element;
                }
            });
            alert(`So chan lon nhat la: ${result}`);
            break;
        case 4:
            result = array[0];
            array.forEach((element) => {
                if (element % 2!= 0 && (element < result)) {
                    result = element;
                }
            });
            alert(`So le nho nhat la: ${result}`);
            break;
        case 5:
            alert("Out of program");
            break;
        default:
            alert("Invalid command");
            break;
    }
}