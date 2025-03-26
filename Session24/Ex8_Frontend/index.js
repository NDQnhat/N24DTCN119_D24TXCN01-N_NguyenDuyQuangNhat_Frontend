let command = 0;
let string = "";
let count = 0;
let words = [];
let charCount = [];
while (command !== 7) {
    command = +prompt(`
        ====================MENU===================
        1. Nhập chuỗi ký tự
        2. Hiển thị chuỗi ký tự
        3. Tìm tất cả các từ trùng lặp trong chuỗi và số lần xuất hiện
        4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
        5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
        6. Chuyển đổi chuỗi ký tự thành dạng snake_case
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
            charCount = [];
            words = [];
            let str = "";
            for(let i = 0; i < string.length; i++) {
                if(string[i] != " " && string[i] != "," && string[i] !="." && string[i] != "?" && string[i] != "!") {
                    // words.push(string[i]);
                    str += string[i];
                } else {
                    words.push(str);
                    words.push(string[i]);
                    str = "";
                }
            }
            for(let i = 0; i < words.length; i++) {
                if(words[i] == " " || words[i] == "," || words[i] == "." || words[i] == "!" || words[i] =="?") {
                    continue;
                } else {
                    count = 1;
                    for(let j = i + 1; j < words.length; j++) {
                        if(words[i] === null)   continue;
                        if(words[i] === words[j]) {
                            count++;
                            words[j] = null;
                        }
                    }
                    charCount.push(words[i]);
                    charCount.push(count);
                }
            }
            let show = "";
            for (let i = 1; i < charCount.length; i += 2) {
                if(charCount[i] > 1) {
                    show += `'${charCount[i - 1]}' exist ${charCount[i]} times\n`;
                }
            }
            alert(show);
            break;
        case 4:
            words = string.split(/\s+/);
            let minWord = words[0];
            let maxWord = words[0];
            for (let i = 0; i < words.length; i++) {
                let word = words[i];
                if (word.length > maxWord.length) {
                    maxWord = word;
                }
                if (word.length < minWord.length) {
                    minWord = word;
                }
            }
            alert(`Longest word: ${maxWord}\nShortest word: ${minWord}`);
            break;
        case 5:
            charCount = [];
            string = string.split("");
            for (let i = 0; i < string.length; i++) {
                count = 1;
                if ((string[i] >="a" && string[i] <="z") || (string[i] >= "A" && string[i] <= "Z")) {
                   if(string[i] === "")   continue;
                   for(let j = i + 1; j < string.length; j++) {
                        if(string[j] === string[i]) {
                            string[j] = "";
                            count++;
                        }
                   }
                   charCount.push(string[i]);
                   charCount.push(count);
                }
            }
            string = string.join("");
            let _show = "";
            for (let i = 1; i < charCount.length; i += 2) {
                // if(charCount[i] > 1) {
                    _show += `'${charCount[i - 1]}' exist ${charCount[i]} times\n`;
                // }
            }
            alert(_show);
            break;
        case 6:
            // string = string.replace(/\s+/g, '_');
            // string = string.toLowerCase();
            string = string.split("");
            for(let i = 0; i < string.length; i++) {
                if(string[i] === " ") {
                    string[i] = "_";
                }
            }
            string = string.join("");
            alert(`snake_case string: ${string}`);
            break;
        case 7:
            alert("Out of program");
            break;
        default:
            alert("Invalid! Enter again.");
            break;
    }
}