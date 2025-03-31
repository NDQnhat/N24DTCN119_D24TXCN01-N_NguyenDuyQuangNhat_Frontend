let command = 0;
let studentList = [];
while (command != 5) {
    command = +prompt(`
        ====================MENU===================
        1. Nhập danh sách sinh viên.
        2. Hiển thị danh sách sinh viên.
        3. Tìm sinh viên theo tên.
        4. Xóa sinh viên khỏi danh sách.
        5. Exit
    `);
    switch (command) {
        case 1:
            let n = +prompt("Enter quantity student: ");
            for (let i = 0; i < n; i++) {
                let inp = prompt("Enter student name: ");
                studentList.push(inp);
            }
            break;
        case 2:
            // alert(studentList);
            console.table(studentList);
            break;
        case 3: {
            let findName = prompt("Eter student name to find: ");
            let founded = false;
            // let index = studentList.indexOf(findName);
            for(let student of studentList) {
                if(student.includes(findName)) {
                    founded = true;
                    alert(student);
                    break;
                }
                if(!founded) {
                    alert("Not found in list")
                }
            } 
            break; }
        case 4: {
            let findName = prompt("Eter student name to del: ");
            let founded = false;
            // let index = studentList.indexOf(findName);
            for(let student of studentList) {
                if(student.includes(findName)) {
                    founded = true;
                    studentList.splice(studentList.indexOf(student), 1);
                    alert("Del success");
                    break;
                } 
                if(!founded) {
                    alert("Not found in list")
                }
            }
            break; }
        case 5:
            alert("Out of program");
            break;
        default:
            alert("Invalid command");
            break;
    }
}