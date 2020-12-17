// 载具都有名字，都会动
function vehicle(vname) {
    this.name = vname;
    this.x = 0
    this.y = 0
}
vehicle.prototype.move = function(x, y) {
    this.x = x
    this.y = y
}
vehicle.prototype.position = function() {
    return {x: this.x, y: this.y}
}

function inheritPrototype(sub, par) {
    // 继承即是继承父类的原型对象，并在其基础上完善子类特有的性质与功能
    const targetProto = Object.create(par.prototype)
    targetProto.constructor = sub
    sub.prototype = targetProto
}

// 车有轮子，且有载具拥有的一切属性和方法，那么如何继承vehicle呢
function car(vname){
    this.name = vname
};
inheritPrototype(car, vehicle)
// 此时的prototyp已经继承了vehicle的prototype，现在开始完善特有的功能
car.prototype.drive = function(x, y) {
    console.log(`${this.name}:use steering wheel, move to ${x}, ${y}`)
    this.move(x, y)
}

const c = new car('carrrrr')
c.drive(20, 20)
console.log(c.position())

