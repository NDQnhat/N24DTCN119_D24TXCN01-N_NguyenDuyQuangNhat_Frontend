let command = 0;
let array = [];
let sum = 0;
let arr = [];
let row = 0;
let col = 0;
while (command !== 7) {
    command = +prompt(`
        ====================MENU===================
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
        5. Tính trung bình cộng các phần tử của một hàng cụ thể
        6. Đảo ngược các hàng trong mảng
        7. Thoát chương trình
        ===========================================
        Lựa chọn của bạn: `);
    switch (command) {
        case 1:
            array = [];
            row = +prompt("Enter quantity of row: ");
            col = +prompt("Enter quantity of col: ");
            // for(let i = 0; i < row; i++) {
            //     array[i] = [];
            //     for(let j = 0; j < col; j++) {
            //         array[i][j] = +prompt(`Enter value at: array[${i}][${j}]: `);
            //     }
            // }
            for(let i = 0; i < row; i ++) {
                arr = [];
                for(let j = 0; j < col; j++) {
                    let temp = +prompt(`Enter value at: array[${i}][${j}]: `);
                    arr.push(temp);
                }
                array.push(arr);
            }
            break;
        case 2:
            if(array.length === 0) {
                alert("EMpty array");
            } else {
                // alert(array);
                console.log(array);
                // for(let i =0; i < array.length; i ++) {
                    // for(let j = 0; j < col; j++) {
                        // console.log(array[i].join("\t"));
                    // }
                // }
            }
            break;
        case 3:
            sum = 0;
            if(array.length === 0) {
                alert("EMpty array");
            } else {
                for(let i = 0; i < row; i++) {
                    for(let j = 0; j < col; j++) {
                        sum += array[i][j];
                    }
                }
                alert(`Sum of all element: ${sum}`);
            }
            break;
        case 4: 
            let max = array[0][0];
            let maxRow = 0;
            let maxCol = 0;
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    if (array[i][j] > max) {
                        max = array[i][j];
                        maxRow = i;
                        maxCol = j;
                    }
                }
            }
            alert(`Max value: ${max}, Position: Array[${maxRow}][${maxCol}]`);
            break;
        case 5:
            let _row = +prompt("Enter row:");
            if (_row < 0 || _row >= row) {
                console.log("Invalid row"); 
            } else {
                sum = 0;
                for (let j = 0; j < array[_row].length; j++) {
                    sum += array[_row][j];
                }
                let average = sum / array[_row].length;
                console.log(`Avg of row:  ${row}= ${average}`);
            }
            break;
        case 6:
            array.reverse();
            alert(`Rev array: ${array}`);
            break;
        case 7:
            alert("Out of program");
            break;
        default:
            alert("Invalid! enter again");
            break;
    }
}