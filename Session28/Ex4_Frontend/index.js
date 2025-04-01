let rectangle = {
    length: 10,
    width: 5,
    getArea: function() {
        return this.length * this.width;
    },
};
let ares = rectangle.getArea();
console.log(ares);
