let command = -32141;
let array = [];
let sum = 0;
let arr = [];
while (command !== 0) {
  command = +prompt(`
        ================ MENU ===============
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. In ra giá trị các phần tử đang quản lý
        3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
        4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng
        5. In ra các số nguyên tố trong mảng và tính tổng
        6. Nhập một số và đếm số lần xuất hiện trong mảng
        7. Thêm một phần tử vào vị trí chỉ định
        8. Xóa một phần tử theo giá trị
        9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần
        0. Thoát
        =====================================
        Lựa chọn của bạn: `);

  switch (command) {
    case 1:
      let n = +prompt("Enter quantity element input: ");
      for (let i = 0; i < n; i++) {
        array[array.length] = +prompt("Enter element: ");
      }
      break;
    case 2:
      alert(`All element of array: ${array}`);
      break;
    case 3:
      arr = [];
      sum = 0;
      for (let num of array) {
        if (num % 2 === 0) {
          sum += num;
          arr.push(num);
        }
      }
      // arr.sort((a, b) => b - a);
      for (let i = 0; i < arr.length - 1; i++) {
        let key = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] > arr[key]) {
            key = j;
          }
        }
        let temp = arr[i];
        arr[i] = arr[key];
        arr[key] = temp;
      }
      alert(`All even element: ${arr} \nSum of even element: ${sum}`);
      break;
    case 4:
      let max = array[0];
      let min = array[0];
      let maxPos = 0;
      let minPos = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
          max = array[i];
          maxPos = i;
        }
        if (array[i] < min) {
          min = array[i];
          minPos = i;
        }
      }
      alert(`Max value: ${max} at position: ${maxPos}, Min value: ${min} at position: ${minPos}`);
      break;
    case 5:
      arr = [];
      sum = 0;
      for (let number of array) {
        let flag = true;
        if (number < 2) flag = false;
        for (let i = 2; i * i <= number; i++) {
          if (number % i === 0) {
            flag = false;
            continue;
          }
        }
        if (flag) {
          arr.push(number);
          sum += number;
        }
      }
      if (arr.length !== 0) {
        alert(`All prime num: ${arr} \nSum: ${sum}`);
      } else {
        alert("No prime num exist");
      }
      break;
    case 6:
      let inp = +prompt("Enter a number: ");
      let count = 0;
      for (let num of array) {
        if (num === inp) {
          count++;
        }
      }
      if (count === 0) {
        alert(`${inp} not exist in array`);
      } else {
        alert(`${inp} exist ${count} time`);
      }
      break;
    case 7:
      let index = +prompt("Enter index in array to add: ");
      if (index < 0 || index > array.length) {
        alert("Invalid position");
      } else {
        let inp = +prompt("Enter value to add: ");
        array.splice(index, 0, inp);
        alert("Added successfully");
      }
      break;
    case 8:
      let value = +prompt("Enter value to delete: ");
      let index1 = array.indexOf(value);
      if (index1 !== -1) {
        array.splice(index1, 1);
        alert("Del succeed!!");
      } else {
        alert("Value not founded");
      }
      break;
    case 9:
      let choice = prompt("1. ascending \t 2. descending");
      if (choice === 1) {
        array.sort((a, b) => a - b);
      } else if (choice === 2) {
        array.sort((a, b) => b - a);
      } else {
        alert("Invalid choice");
      }
      alert(`Sorted array: ${array}`);
      break;
    case 0:
      alert("Out of program");
      break;
    default:
      alert("Invalid command");
      break;
  }
}
