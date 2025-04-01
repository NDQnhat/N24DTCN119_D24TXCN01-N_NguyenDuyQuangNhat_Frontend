let employees = [];

function displayEmployees(employees) {
    console.table(employees);
};

function addEmployee(employees) {
    let id = prompt("Enter employee ID:");
    if(employees.some(emp => emp.id === id)) {
        alert("Employee ID already exists!");
        return;
    }
    let name = prompt("Enter employee name:");
    let position = prompt("Enter employee position:");
    let salary = parseFloat(prompt("Enter employee salary:"));
    if (!isNaN(salary) && salary > 0) {
        let employee = {
            id: id,
            name: name,
            position: position,
            salary: salary
        };
        employees.push(employee);
        alert("Employee added successfully!");
        displayEmployees(employees);
    } else {
        alert("Invalid salary!");
    }
};

function deleteEmployee(employees) {
    let id = prompt("Enter employee ID to delete:");
    let index = employees.findIndex(emp => emp.id === id);
    
    if (index === -1) {
        alert("Employee not found!!!");
    } else {
        employees.splice(index, 1);
        alert("Employee deleted successfully!");
        displayEmployees(employees);
    }
};

function updateSalary(employees) {
    let id = prompt("Enter employee ID to update salary:");
    let index = employees.findIndex(emp => emp.id === id);
    if (index === -1) {
        alert("Employee not found!!!");
    } else {
        let newSalary = parseFloat(prompt("Enter new salary:"));
        if (!isNaN(newSalary) && newSalary > 0) {
            employees[index].salary = newSalary;
            alert("Salary updated successfully!");
            displayEmployees(employees);
        } else {
            alert("Invalid salary!");
        }
    }
}

function searchEmployees(employees) {
    let name = prompt("Enter employee name to search:");
    let foundEmployees = employees.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()));
    if (foundEmployees.length === 0) {
        alert("Employee not found!!!");
    } else {
        alert(`${foundEmployees.length} founded!!!!`);
        console.log("Found employees:");
        console.table(foundEmployees);
    }
}
let flag = true;

while (flag) {
    let choice = +prompt(`
    1. Thêm nhân viên mới
    2. Xóa nhân viên theo id
    3. Cập nhật mức lương của nhân viên theo id
    4. Tìm kiếm nhân viên theo tên
    5. Thoat`);

    switch(choice) {
        case 1:
            addEmployee(employees);
            break;
        case 2:
            deleteEmployee(employees);
            break;
        case 3:
            updateSalary(employees);
            break;
        case 4:
            searchEmployees(employees);
            break;
        case 5:
            flag = false;
            alert("Out of program");
            break;
        default:
            alert("Invalid choice!!!");
            break;
    }
}