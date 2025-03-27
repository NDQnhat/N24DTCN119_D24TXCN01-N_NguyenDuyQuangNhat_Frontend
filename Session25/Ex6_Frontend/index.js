function isPalindrome(str) {
    let string = str;
    string = string.split("");
    let reversed = string.reverse().join("");
    return str === reversed;
};

let input = prompt("Enter a string:");
if (isPalindrome(input)) {
    alert("Palindrome string");
} else {
    alert("Not a palindrome string");
}