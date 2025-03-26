let command = 0;
let array = [];
let sum = 0;
let arrEven = [];
let arrOdd = [];
while (command !== 7) {
    command = +prompt(`
        ====================MENU===================
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm các phần tử chẵn và lẻ
        4. Tính trung bình cộng của mảng
        5. Xóa phần tử tại vị trí chỉ định
        6. Tìm phần tử lớn thứ hai trong mảng
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
            sum /= array.length;
            alert(`Avg of array: ${sum}`);
            break;
        case 3:
            arrEven = [];
            arrOdd = [];
            sum = 0;
            for(let num of array) {
                if(num % 2 === 0) {
                    arrEven.push(num);
                } else {
                    arrOdd.push(num);
                }
            }
            alert(`All of even element: ${arrEven} \nAll of odd element: ${arrOdd}`);
            break;
        case 5:
            let index1 = +prompt("Enter index to delete: ");
            if (index1 >= 0 && index1 <= array.length) {
                array.splice(index1, 1);
                alert("Del succeed!!");
            } else {
                alert("Index not exist");
            }
            break;
        case 6:
            // if(array[0] > array[1]) {
            //     let max1 = array[0];
            //     let max2 = array[1];
            // } else {
            //     let max1 = array[1];
            //     let max2 = array[0];
            // } 
            // for (let num of array) {
            //     if(num > max1) {
            //         max2 = max1;
            //         max1 = num;
            //     }
            // }
            array.sort((a, b) => a - b);
            let max2 = array[array.length - 2];
            alert(`Phan tu lon thu 2: ${max2}`);
            break;
        case 7:
            alert("Out of program");
            break;
        default:
            alert("Invalid enter again");
            break;
    }
}