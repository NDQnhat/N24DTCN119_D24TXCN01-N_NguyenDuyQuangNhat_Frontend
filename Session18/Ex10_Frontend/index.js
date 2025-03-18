let number = Number(prompt("Enter an integer number (0-999): "));
let read = '';

if (number < 0 || number > 999) {
    alert("Out of range!");
} else {
    if (number >= 100) {
        let hundreds = Math.floor(number / 100);
        switch (hundreds) {
            case 1:
                read = "Một trăm";
                break;
            case 2:
                read = "Hai trăm";
                break;
            case 3:
                read = "Ba trăm";
                break;
            case 4:
                read = "Bốn trăm";
                break;
            case 5:
                read = "Năm trăm";
                break;
            case 6:
                read = "Sáu trăm";
                break;
            case 7:
                read = "Bảy trăm";
                break;
            case 8:
                read = "Tám trăm";
                break;
            case 9:
                read = "Chín trăm";
                break;
        }
        number %= 100;
    }
    if (number >= 10) {
        let ten = Math.floor(number / 10);
        switch (ten) {
            case 1:
                read += " Mười";
                break;
            case 2:
                read += " Hai mươi";
                break;
            case 3:
                read += " Ba mươi";
                break;
            case 4:
                read += " Bốn mươi";
                break;
            case 5:
                read += " Năm mươi";
                break;
            case 6:
                read += " Sáu mươi";
                break;
            case 7:
                read += " Bảy mươi";
                break;
            case 8:
                read += " Tám mươi";
                break;
            case 9:
                read += " Chín mươi";
                break;
        }
        number %= 10;
    }
    if (number > 0) {
        switch (number) {
            case 1:
                read += " Một";
                break;
            case 2:
                read += " Hai";
                break;
            case 3:
                read += " Ba";
                break;
            case 4:
                read += " Bốn";
                break;
            case 5:
                read += " Năm";
                break;
            case 6:
                read += " Sáu";
                break;
            case 7:
                read += " Bảy";
                break;
            case 8:
                read += " Tám";
                break;
            case 9:
                read += " Chín";
                break;
        }
    }
    if (number === 0 && read === '') {
        read = "Không";
    }
    alert(read);
}