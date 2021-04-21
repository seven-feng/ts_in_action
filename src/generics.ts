// 泛型
// 不预先确定的数据类型，具体的类型在使用的时候才能确定
// function log<T>(value: T): T {
//     console.log(value)
//     return value
// }

// log<string[]>(['a', 'b'])
// log(['a', 'c'])

// 定义函数类型
// type Log = <T>(value: T) => T
// let myLog: Log = log


// interface Log<T> {
//     (value: T): T
// }

// let myLog: Log<number> = log
// myLog(1) 

// 泛型类
class Log<T> {
    run(value: T) {
        console.log(value)
        return value
    }
}

let log1 = new Log<number>()
log1.run(1)
let log2 = new Log()
log2.run({ a: 1 })

// 泛型约束
interface Length {
    length: number
}
function log<T extends Length>(value: T): T {
    console.log(value, value.length)
    return value
}
log([1])
log('123')

// 泛型的好处
// 1. 函数和类可以轻松的支持多种类型，增强程序的扩展性
// 2. 不必写多条函数重载，冗长的联合类型声明，增强代码的可读性
// 3. 灵活控制类型之间的约束


