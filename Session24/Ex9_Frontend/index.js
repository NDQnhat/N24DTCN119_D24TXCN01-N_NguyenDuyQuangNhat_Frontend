let command = 0;
let string = "";
let str = "";
while (command !== 7) {
    command = +prompt(`
        ====================MENU===================
        1. Nhập chuỗi ký tự
        2. Hiển thị chuỗi ký tự
        3. Đếm số lượng các ký tự là chuỗi và số trong chuỗi ký tự nhập vào
        4. Chuyển đổi các ký tự viết hoa → viết thường, viết thường → viết hoa trong chuỗi.
        5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2 người dũng nhập vào. Ví dụ: "Hello", “abcdefg" → “Haeblcldoefg”
        6. Tách chuỗi thành các từ, sắp xếp chúng theo độ dài của từ, từ ngắn nhất đến dài nhất.
        7. Thoát chương trình
        ===========================================
        Your choice: `);
    switch (command) {
        case 1:
            string = prompt("Enter a string: ");
            break;
        case 2:
            alert(string);
            break;
        case 3:
            let letter = 0, number = 0;
            for (let i = 0; i < string.length; i++) {
                // let char = string[i];
                // if (/[a-zA-Z]/.test(char)) {
                //     letters++;
                // } else if (/[0-9]/.test(char)) {
                //     numbers++;
                // }
                if((string[i] >= 'a' && string[i] <= 'z') || (string[i] >= 'A' && string[i] <= 'Z')) {
                    letter++;
                } else if (string[i] >= 0 && string[i] <= 9) {
                    number++;
                }
            }
            alert(`Quantity letter: ${letter}, number: ${number}`);
            break;
        case 4:
            let convert = "";
            for (let i = 0; i < string.length; i++) {
                let char = string[i];
                if (char >= 'a' && char <= 'z') {
                    convert += char.toUpperCase();
                } else if (char >= 'A' && char <= 'Z') {
                    convert += char.toLowerCase();
                } else {
                    convert += char;
                }
            }
            alert(`Converted string: ${convert}`);
            break;
        case 5:
            str = prompt("Enter the second string: ");
            let mixedString = "";
            let maxLength = Math.max(string.length, str.length);
            for (let i = 0; i < maxLength; i++) {
                if (i < string.length) mixedString += string[i];
                if (i < str.length) mixedString += str[i];
            }
            alert(`Mixed string: ${mixedString}`);
            break;
        case 6:
            let words = [];
            str = "";
            let i = 0;
            while (i < string.length) {
                let char = string[i];
                if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
                    str += char; 
                } else {
                    if (str !== "") {
                        words.push(str);
                        str = ""; 
                    }
                }

                i++;
            }
            if (str !== "") {
                words.push(str);
            }
            let temp;
            for (let j = 0; j < words.length; j++) {
                for (let k = j + 1; k < words.length; k++) {
                    if (words[j].length > words[k].length) {
                        temp = words[j];
                        words[j] = words[k];
                        words[k] = temp;
                    }
                }
            }

            alert(`Words sorted by length: ${words.join(", ")}`);
            break;
        case 7:
            alert("Exiting the program");
            break;
        default:
            alert("Invalid choice! Please enter again.");
            break;
    }
}
