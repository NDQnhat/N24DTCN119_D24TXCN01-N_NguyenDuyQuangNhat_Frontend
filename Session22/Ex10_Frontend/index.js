let array = [];
let input = null;
let command = 0;
while (command !== 6) {
  alert("MENU \n1. Nhap mang \n2. Hien thi mang \n3. Them phan tu \n4. Sua phan tu \n5. Xoa phan tu \n6. Thoat");
  command = +(prompt("Enter your choice: "));
  switch (command) {
    case 1:
      input = prompt("Enter the element: ");
      array[array.length] = input;
      break;
      
    case 2:
      if (array.length > 0) {
        alert("Array elements: ");
        for (let i = 0; i < array.length; i++) {
          alert(array[i]);
        }
      } else {
        alert("Array is empty");
      }
      break;

    case 3:
      input = prompt("Enter the element: ");
      array[array.length] = input;
      break;

    case 4:
      let index = +(prompt("Enter the index: "));
      if (index >= 0 && index < array.length) {
        input = prompt("Enter the new element: ");
        array[index] = input;
      } else {
        alert("Invalid index");
      }
      break;

    case 5:
      index = +(prompt("Enter the index: "));
      if (index >= 0 && index < array.length) {
        for (let i = index; i < array.length - 1; i++) {
          array[i] = array[i + 1];
        }
        array.length = array.length - 1;
      } else {
        alert("Invalid index.");
      }
      break;
    case 6:
      alert("Thoat chuong trinh");
      break;

    default:
      alert("Invalid command");
      break;
  }
}
