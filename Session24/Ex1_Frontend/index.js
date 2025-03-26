let command = 0;
let array = [];
let sum = 0;
let arr = [];
while (command !== 7) {
    command = +prompt(`
        ====================MENU===================
        1. Nhập mảng
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
        4. Tính tổng các phần tử trong mảng
        5. Tìm số lần xuất hiện của một phần tử trong mảng
        6. Sắp xếp mảng tăng dần
        7. Thoát chương trình
        ===========================================
        Lựa chọn của bạn: `);
    switch (command) {
        case 1:
            let n = +prompt("Enter quantity element input: ");
            for (let i = 0; i < n; i++) {
                array[array.length] = +prompt("Enter element: ");
            }
            break;
        case 2:
            alert(`All element of array: ${array}`);
            break;
        case 4:
            arr = [];
            sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            alert(`Sum of all element: ${sum}`);
            break;
        case 3:
            let max = array[0]; let min = array[0];
            for (let i = 0; i < array.length; i++) {
                if (array[i] > max) {
                    max = array[i];
                }
                if (array[i] < min) {
                    min = array[i];
                }
            }
            alert(`Max value: ${max}, Min value: ${min}`);
            break;
        case 5:
            let inp = +prompt("Enter a number: ");
            let count = 0;
            for (let num of array) {
                if (num === inp) {
                    count++;
                }
            }
            if (!count) {
                alert("Not exist" + inp + " in array");
            } else {
                alert(`${inp} exist ${count} times`);
            }
            break;
        case 6:
            array.sort((a, b) => a - b);
            alert(`Sorted array: ${array}`);
            break;
        case 7:
            alert("Out of program");
            break;
        default:
            alert("Invalid enter again");
            break;
    }
}