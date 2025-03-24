let command = 0;
let array = [];
let sum = 0;
let arr = [];
while(command !== 8) {
    command = +prompt(`
        ====================MENU===================
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. In ra giá trị các phần tử đang quản lý
        3. In ra giá trị các phần tử chẵn và tính tổng
        4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
        5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
        6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
        7. Thêm một phần từ vào vị trí chỉ định
        8. Thoát
        ===========================================
        Lựa chọn của bạn: `);
    switch (command) {
        case 1:
            let n = +prompt("Enter quantity element input: ");
            for(let i= 0; i < n; i++) {
                array[array.length] = +prompt("Enter element: ");
            }
            break;
        case 2:
            alert(`All element of array: ${array}`);
            break;
        case 3:
            arr = [];
            sum = 0;
            for(let num of array) {
                if(num % 2 === 0) {
                    sum += num;
                    arr.push(num);
                }
            }
            alert(`All of even element: ${arr} \nSum of odd element: ${sum}`);
            break;
        case 4:
            let max =array[0]; let min = array[0];
            for(let i = 0; i < array.length; i++) {
                if(array[i] > max) {
                    max = array[i];
                }
                if(array[i] < min) {
                    min = array[i];
                }
            }
            alert(`Max value: ${max}, Min value: ${min}`);
            break;
        case 5:
            arr = [];
            sum = 0;
            for(let number of array) {
                let flag = true;
                if(number < 2)  flag = false;
                for(let i = 2; i*i <= number; i++) {
                    if(number % i === 0) {
                        flag = false;
                        continue;
                    }
                }
                if(flag) {
                    arr.push(number);
                    sum += number;
                }
            }
            if(arr.length !== 0) {
                alert(`All prime num: ${arr} \nSum: ${sum}`);
            } else {
                alert("No exist prime number");
            }
            break;
        case 6:
            let inp = +prompt("Enter a number: ");
            let count = 0;
            for(let num of array) {
                if(num === inp) {
                    count++;
                }
            } 
            if(!count) {
                alert("Not exist" + inp +" in array");
            } else {
                alert(`${inp} exist ${count} times`);
            }
            break;
        case 7:
            let index = prompt("Enter index in array to add");
            if(index < 0 || index > array.length) {
                alert("Invalid position");
            } else {
                let inp = +prompt("Enter value to add: ");
                array.splice(index, 0, inp);
                alert("Add success");
            }
            break;
        case 8:
            alert("Out of program");
            break;
        default:
            alert("Invalid enter again");
            break;
    }
}