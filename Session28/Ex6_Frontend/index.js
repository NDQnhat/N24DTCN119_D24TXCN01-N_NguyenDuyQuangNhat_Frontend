const cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
];
function payMoney(price, quantity) {
    return price * quantity;
}
function totalPay() {
    let total = 0;
    for (let item of cart) {
        total += payMoney(item.price, item.quantity);
    }
    return total;
};
console.log("Total pay: " + totalPay());