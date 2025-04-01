const company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employees: [
        { name: "Nguyễn Văn Luận", position: "Developer" },
        { name: "Nguyễn Văn Hoàng", position: "Tester" },
        { name: "Hoàng Nam Cao", position: "Manager" }
    ]
};

console.log("Company Name:", company.name);
console.log("Location:", company.location);
console.log("Employees:");
company.employees.forEach((employee, index) => {
    console.log(`${index + 1}. ${employee.name}`);
});
console.table(company.employees);
