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
        4. Tính tổng đường chéo chính
        5. Tính tổng đường chéo phụ
        6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)
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
            sum = 0;
            for(let i = 0; i < row; i++) {
                for(let j = 0; j < col; j++) {
                    if(i === j) {
                        sum += array[i][j];
                    }
                }
            }
            alert(`Sum of main cross axis: ${sum}`);
            break;
        case 5:
            sum = 0;
            if (array.length === 0) {
                alert("Empty array");
            } else if (row !== col) {
                alert("Not a square matrix");
            } else {
                for (let i = 0; i < row; i++) {
                    sum += array[i][col - 1 - i];
                }
                alert(`Sum: ${sum}`);
            }
            break;
        case 6:
            let choice = +prompt("0. Row\n1. Col");
            sum = 0;
            let average = 0;

            switch (choice) {
                case 0:
                    let rowIndex = +prompt(`Enter row index: `);
                    if (rowIndex >= 0 && rowIndex < row) {
                        for (let j = 0; j < col; j++) {
                            sum += array[rowIndex][j];
                        }
                        average = sum / col;
                        alert(`Average of row ${rowIndex}: ${average}`);
                    } else {
                        alert("Invalid");
                    }
                    break;

                case 1:
                    let colIndex = +prompt(`Enter column index: `);
                    if (colIndex >= 0 && colIndex < col) {
                        for (let i = 0; i < row; i++) {
                            sum += array[i][colIndex];
                        }
                        average = sum / row;
                        alert(`Average of column ${colIndex}: ${average}`);
                    } else {
                        alert("Invalid");
                    }
                    break;

                default:
                    alert("Invalid choice!");
                    break;
            }
            break;
        case 7:
            alert("Out of program");
            break;
        default:
            alert("Invalid! enter again");
            break;
    }
}