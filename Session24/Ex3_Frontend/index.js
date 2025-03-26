let command = 0;
let array = [];
let sum = 0;
let arr = [];
while (command !== 7) {
    command = +prompt(`
        ====================MENU===================
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
        4. Tính tổng và trung bình cộng của các số dương trong mảng
        5. Đảo ngược mảng
        6. Kiểm tra mảng có đối xứng không
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
                if(array[i] > 0) {
                    sum += array[i];
                }
            }
            alert(`Sum of positive element: ${sum}`);
            sum /= array.length;
            alert(`Avg of positive element: ${sum}`);
            break;
        case 3:
            let max = array[0];
            for (let i = 0; i < array.length; i++) {
                if (array[i] > max) {
                    max = array[i];
                }
            }
            let index = array.indexOf(max);
            alert(`Max value: ${max}, Index: ${index}`);
            break;
        case 5:
            // array.reverse();
            let temp = 0;
            for (let i = 0; i < Math.floor(array.length / 2); i++) {
                temp = array[i];
                array[i] = array[array.length - i - 1];
                array[array.length - i - 1] = temp;
            }
            alert("Rev array: " + array);
            break;
        case 6:
            let flag = 1;
            // arr = array;
            // array.reverse();
            for (let i = 0; i < Math.floor(array.length / 2); i++) {
                if (array[i] !== array[array.length - i - 1]) {
                    flag = 0;
                    break;
                }
            }
            if (flag) {
                alert("la mangdoi xung");
            } else {
                alert("Khong phai mang doi xung");
            }
            break;
        case 7:
            alert("Out of program");
            break;
        default:
            alert("Invalid enter again");
            break;
    }
}