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
        3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
        4. Đảo ngược chuỗi ký tự
        5. Đếm số lượng từ trong chuỗi ký tự
        6. Tìm kiếm và thay thế các ký tự (Do người dùng nhập vào) trong chuỗi gốc. Ví dụ người dùng nhập “e”, chuỗi gốc “Hello” → Tìm thấy ký tự. Cho người dùng nhập vào ký tự thay thế “o” → Output: “Hollo”
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
            string = string.split("");
            for(let i = 0; i < string.length; i++) {
                if(string[0] === " " || string[string.length - 1] == " ");
                string.slice(i, 1);
            }
            string = string.join("");
            alert("del success");
            break;
        case 4: 
            string = string.split("").reverse().join("");
            alert(`Reversed string: ${string}`);
            break;
        case 5:
            count = 1;
            string = string.split("");
            for(let i = 0; i < string.length; i++) {
                if(string[i] == " ") {
                    if((string[i + 1] >= "a" && string[i + 1] <= "z") || (string[i + 1] >= "A" && string[i + 1] <= "Z")) {
                        count++;
                    } else {
                        continue;
                    }
                }
            }
            string = string.join("");
            alert(`${count} words`);
            break;
        case 6: 
            // let flag = false;
            let inp = prompt("Enter char to find: ");
            if(string.includes(inp)) {
                let input = prompt("Enter char to replace: ");
                string = string.split("");
                for(let i = 0; i < string.length; i++) {
                    if(string[i] == inp) {
                        flag = true;
                        string[i] = input;
                    }
                }
                string = string.join("");
            } else {
                alert("Cannot find");
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