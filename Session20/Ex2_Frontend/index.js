let n = +prompt("nhap so khaong tu 1 den: ");
if(isNaN(n) || n < 0) {
    console.log("Invalid data");
} else {
    console.log("cac so chia het cho 5 tu 1 den " + n);
    for(let i = 1; i <= n; i++) {
        if(i % 5 ===0) {
            console.log(i);
        }
    }
}