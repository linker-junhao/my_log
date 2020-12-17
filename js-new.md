# 实现一个new操作
`new`关键字用来创建一个用户定义对象类型或内置对象类型的实例。  
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


## 关键
1. constructor修正
2. __proto__修正
3. 构造函数有返回值时直接使用返回值