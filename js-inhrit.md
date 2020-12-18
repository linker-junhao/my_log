# 继承 - 组合寄生式继承
这里不谈`extents`语法。  
一般来说继承指子类继承父类的非私有成员属性和方法。在非es6的语法中，并没有继承相关的关键字来实现，但是通过原型链可以实现一样的效果，甚至可以更加灵活的实现非标准的继承。

## 组合寄生式继承
```javascript
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
```

## 总结
除了组合寄生式继承方式外，还有一些其它的继承方式，比如寄生式继承，相对来说组合寄生继承的方式比较高效。  
使用js实现继承，即是继承父类的原型对象，并在其基础上完善子类特有的性质与功能，而各种继承方式都是在实现这一点，无非是其中的开销与影响，但其不变的核心是js是基于原型链来继承的。

## 一些感想
es6之前的语法并没有提供继承关键字，面向对象是现代软件开发的一种良好范式，它使软件开发工程中的代码能够被良好的组织，但也并非万能的，比如大猩猩手里的香蕉，通过面向对象的方式的话，我只想要一个香蕉，但是我必须先创建一个大猩猩，这无疑是高成本的。
