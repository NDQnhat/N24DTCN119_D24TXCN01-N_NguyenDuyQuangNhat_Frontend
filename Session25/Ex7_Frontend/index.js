function convert(string) {
    string = string.split("");
    
    for (let i = 0; i < string.length; i++) {
        if (i === 0 || string[i - 1] === " ") {
            string[i] = string[i].toUpperCase();
        }
        else if (string[i] >= "A" && string[i] <= "Z") {
            string[i] = string[i].toLowerCase();
        }
    }
    
    return string.join("");
}

let string = "hello WORLD";
let result = convert(string);
console.log(result);
string = "rIKKEi acaDEMy"; 
result = convert(string);
console.log(result);