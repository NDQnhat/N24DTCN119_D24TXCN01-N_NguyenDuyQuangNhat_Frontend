let command = 0;
while (command != 5) {
    command = +prompt(`
        ====================MENU===================
        1. Sum of 2 numbers
        2. Difference of 2 numbers
        3. Product of 2 numbers
        4. Division of 2 numbers
        5. Exit
    `);
    switch (command) {
        case 1:
            let num1 = +prompt("Enter the first number:");
            let num2 = +prompt("Enter the second number:");
            alert(`Sum: ${num1 + num2}`);
            break;
        case 2:
            let num3 = +prompt("Enter the first number:");
            let num4 = +prompt("Enter the second number:");
            alert(`Difference: ${num3 - num4}`);
            break;
        case 3:
            let num5 = +prompt("Enter the first number:");
            let num6 = +prompt("Enter the second number:");
            alert(`Product: ${num5 * num6}`);
            break;
        case 4:
            let num7 = +prompt("Enter the first number:");
            let num8 = +prompt("Enter the second number:");
            if (num8 != 0) {
                alert(`Division: ${num7 / num8}`);
            } else {
                alert("Cannot divide by zero!!");
            }
            break;
        case 5:
            alert("Out of program");
            break;
        default:
            alert("Invalid command");
            break;
    }
}