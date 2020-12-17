# 原型链
原型链是js实现继承的途径。

## 主要涉及到：
* prototype
* \_\_proto\_\_
* constructir
* Object.setPrototypeOf()
* Object.getPrototypeOf()
* instanceof

### prototype
prototype是函数的一个属性。
```javascript
function test() {}
console.log(test.prototype)
```

### \_\_proto\_\_
\_\_proto\_\_是函数实例化后的对象的一个属性。其指向的是该对象的构造函数的prototype。
```javascript
function car(name) {
    this.name = name
}
const volvoCar = new car('volvo')
console.log(volvoCar.__proto__ === car.prototype) // true
```

### constructor
constructor必须是一个函数，这是new运算符的规范。在创建的的实例中，会存在该属性，指向构造该实例的函数。
```javascript
function car(name) {
    this.name = name
}
const volvoCar = new car('volvo')
console.log(volvoCar.constructor === car) // true
```


### Object.setPrototypeOf() & Object.getPrototypeOf()
字面意思，具体用法：
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf

### instanceof
判断一个对象是否是某一个构造函数的实例对象（存在继承关系），继承就是指在原型链上能够找到该构造函数的原型对象。instanceof是顺着原型链依次向最原始的原型查找，直到找到该原型对象，如果一直没找到，就表示并非是该构造函数的一个实例对象。


### 最后
原型链最后指向的是一个什么东西呢，最后指向null。
```javascript
const a = {}

console.log(a.__proto__.__proto__) //null
```
