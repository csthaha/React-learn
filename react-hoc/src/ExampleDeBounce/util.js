/** 防抖 
 *  func
 *  wait
*/
export function debounce(func, wait) {
    var result, timeOut;
    return function () {
        // this 
        // 参数
        var context = this;
        var args = arguments;
        clearTimeout(timeOut)
        timeOut = setTimeout(function () {
            result = func.apply(this, args)
        }, wait)
        return result;
    }
}

/**可用于装饰的 防抖 */
// 装饰器都是函数
export function decDebounce(wait) {
    return function (target, key, descriptor) {
        var callBack = descriptor.value;   // 将之前要做的拿到 ，保证之前要做的
        var fn = debounce(callBack, wait);
        descriptor.value = fn;
    }
}

export function decArrowDebounce(wait) {
    return function (target, key, descriptor) {
        // 拿到原来的
        // configurable: true;
        console.log(target,'----------')
        var callBack = descriptor.initializer && descriptor.initializer();
        var fn = debounce(callBack, wait);
        return {
            configurable: true,
            get: function() {
                return fn;
            }

        }
    }
}

// 修饰方法的时候 改变的是 value 的属性 // descriptor.value
// 修饰属性的时候 改变的是 get 方法    // descriptor.initializer

//改变原来的 || 返回一个新的
// return {
//     configurable: true,
//     get: function() {
//         return fn;
//     }
// }

// hoc 高阶组件 装饰整个组件
// 本质就是装饰一个 class
// 修饰类的
export function decDisplayName(displayname) {
    return function (target) {
        target.displayName = displayname
    }
}

class Base {
    a() {
        console.log('a')
    }
    b = () => {
        console.log('b')
    }
}

const base = new Base();
console.log('base', base)

// b 是一个属性  a 是 它上的一个方法