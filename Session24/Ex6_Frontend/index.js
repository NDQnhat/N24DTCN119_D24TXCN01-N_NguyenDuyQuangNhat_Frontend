let command = 0;
let array = [];
let sum = 0;
let arr = [];
let row = 0;
let col = 0;
let string = "";
let str = "";
let count = 0;
while (command !== 7) {
    command = +prompt(`
        ====================MENU===================
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Tính độ dài của chuỗi
        4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
        5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
        6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
        7. Thoát chương trình
        ===========================================
        Lựa chọn của bạn: `);
    switch (command) {
        case 1:
            string = prompt("Enter a string: ");
            break;
        case 2:
            alert(string);
            break;
        case 3:
            console.log(string.length);
            break;
        case 4: 
            count = 0;
            str = prompt("Enter character to find: ");
            string = string.split("");
            for(let char of string) {
                if(char === str) {
                    count++;
                }
            }
            string = string.join("");
            alert(`${str} exist ${count} time`);
            break;
        case 5:
            arr = [];
            arr = string.split("");
            str = [];
            str = arr.reverse().join("");
            if(str === string) {
                alert("La chuoi doi xung");
            } else {
                alert("Khong phai chuoi doi xing");
            }
            break;
        case 6:
            string = string.split("");
            for(let i = 0; i < string.length; i++) {
                if(string[i] == " ") {
                    if(i === 0) {
                        string[i] = string[i].toUpperCase();
                    }
                    else if((string[i + 1] >= "a" && string[i + 1] <= "z")) {
                        string[i + 1] = string[i + 1].toUpperCase();
                    } else {
                        continue;
                    }
                }
            }
            string = string.join("");
            alert(string);
            break;
        case 7:
            alert("Out of program");
            break;
        default:
            alert("Invalid! enter again");
            break;
    }
}