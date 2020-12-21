# 实现一个new操作
`new`运算符用来创建一个用户定义对象类型或内置对象类型的实例。  
## 创建过程：
>创建一个空的简单JavaScript对象（即{}）；  
链接该对象（设置该对象的constructor）到另一个对象 ；  
将步骤1新创建的对象作为this的上下文 ；  
如果该函数没有返回对象，则返回this。

## 手动实现
```javascript
function shape(type) {
    this.type = type
}

shape.prototype.showType = function() {
    console.log(this.type)
}

/* 创建一个空的简单JavaScript对象（即{}）；  
链接该对象（设置该对象的constructor）到另一个对象 ；  
将步骤1新创建的对象作为this的上下文 ；  
如果该函数没有返回对象，则返回this。 */
function selfNew(cstor, ...rest) {
    const target = {}
    // constructor修正
    target.constructor = cstor
    // __proto__修正
    target.__proto__ = cstor.prototype
    const cstorRet = cstor.apply(target, rest)
    if(cstorRet === undefined) {
        return target
    } else {
        return cstorRet
    }
}

const rect = selfNew(shape, 'rect')
rect.showType()
console.log(rect.constructor === shape)
```


## 总结
new的关键点：
1. constructor修正
2. __proto__修正
3. 构造函数有返回值时直接使用返回值，没有时返回this，从这里就可以见得箭头函数不支持new的操作，因为尖头函数的this的值是其书写时所在的this。

## 一些感想
有没有想过为什么可以new Array()，new Object()， new Boolean，new Function()，因为Array，Object，Boolean，Function本身的类型就是函数啊，所以可以使用new操作。
那么是不是所有的函数都可以作为constructor来构造对象呢？显然不是，比如new parseInt()就不行。  
## ES6+的构造函数和可调用函数的区分：
* 箭头函数、在class或object中定义的函数都是不可用来作为构造函数。
* 通过class语法创建的函数不能直接调用，只能new语法使用。
* 除非这个函数额外有所说明，js内建的函数都是不可以用作构造的。
* 除上述情况外，其它方式创建的函数都既可以调用也可以构造。
