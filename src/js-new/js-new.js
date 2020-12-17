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
    target.constructor = cstor
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
