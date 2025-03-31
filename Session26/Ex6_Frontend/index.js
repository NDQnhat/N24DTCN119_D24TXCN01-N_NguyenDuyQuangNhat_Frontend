function formatDate(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid data";
    }
    if (arr.length === 0) {
        return "Empty array";
    }
    let result = [];
    for (let str of arr) {
        if (str.length !== 10 || str[4] !== '-' || str[7] !== '-') {
            result.push("Invalid data");
            continue;
        }
        let year = str.slice(0, 4);
        let month = str.slice(5, 7);
        let day = str.slice(8, 10);
        if (isNaN(year) || isNaN(month) || isNaN(day)) {
            result.push("Invalid data");
            continue;
        }
        year = +year;
        month = +month;
        day = +day;
        if (month < 1 || month > 12 || day < 1 || day > 31) {
            result.push("Invalid data");
            continue;
        }
        const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (day > dayInMonth[month - 1]) {
            if (month === 2 && day === 29 && year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {

            } else {
                result.push("Dữ liệu không hợp lệ");
                continue;
            }
        }
        const formattedDate = `${day}/${month}/${year}`;
        result.push(formattedDate);
    }
    return result;
}
console.log(formatDate(["2025-03-10", "2024-12-25", "2023-07-01"]));
console.log(formatDate([]));
console.log(formatDate("abc"));
console.log(formatDate(["2025-03-10", "2023-13-01", "2024-02-29"]));
