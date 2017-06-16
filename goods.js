const Goods = function (name, price) {
    this.name = name;
    this.price = price;
}
Goods.prototype.setName=function(name) {this.name=name};
Goods.prototype.getName=function() {return this.name};
Goods.prototype.setPrice=function(price) {this.price=price};
Goods.prototype.getPrice=function() {return this.price};
console.time("start");
var g = new Goods("达利园", 20);
console.log(g.getPrice());
console.log(g.getName());
g.setPrice(30);
console.log(g.getPrice());
console.timeEnd("start");


