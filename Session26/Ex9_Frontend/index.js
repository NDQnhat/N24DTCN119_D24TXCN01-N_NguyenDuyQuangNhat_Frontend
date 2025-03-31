let quantity = +prompt("Enter quantity of number to input (10 - 20): ");

if (quantity < 10 || quantity > 20) {
    console.log("Invalid quantity");
} else {
    let array = [];
    for (let i = 0; i < quantity; i++) {
        let input = +prompt("Enter a number: ");
        array.push(input);
    }
    if(array.length === 0) console.log("Array is empty");
    else {
        let sumEven = array.reduce((acc, element) => {
            if(element % 2 === 0) {
                acc += element;
            }
            return acc;
        }, 0);
        console.log("Sum of even numbers: " + sumEven);
        let sumOdd = array.reduce((acc, element) => {
            if(element % 2!== 0) {
                acc += element;
            }
            return acc;
        }, 0);
        console.log("Sum of odd numbers: " + sumOdd);
    }
}