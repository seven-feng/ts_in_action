// 类型检查机制：
// TypeScript 编译器在做类型检查时，所秉承的一些原则，以及表现出的一些行为。
// 作用：辅助开发，提高开发效率
// 类型推断
// 不需要指定变量的类型（函数的返回值类型），TypeScript 可以根据某些规则自动地为其推断出一个类型
// 基础类型推断
let a = 1
let b = [1]
let c = (x = 1) => x + 1
// 最佳通用类型推断
let b1 = [1, null]
// 上下文类型推断
window.onkeydown = (event: KeyboardEvent) => {
    console.log(event.location)
}

// 避免滥用类型断言
interface Foo {
    bar: number
}
let foo = {} as Foo
foo.bar = 1


// 类型兼容性
// 当一个类型 Y 可以被赋值给另一个类型 X 时，我们就可以说类型 X 兼容类型 Y 
// X 兼容 Y ：X(目标类型) = Y（源类型）
// 总结口诀：
// 结构之间兼容：成员少的兼容成员多的
// 函数之间兼容：参数多的兼容参数少的


let s: String = 'a'
s = null

// 接口兼容性
interface X {
    a: any
    b: any
}

interface Y {
    a: any
    b: any
    c: any
}
let x: X = { a: 1, b: 2 }
let y: Y = { a: 1, b: 2, c: 3 }
x = y

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
    return handler
}

// 1）参数个数
let handler1 = (a: number) => { }
hof(handler1)
let handler2 = (a: number, b: number, c: number) => { }
// hof(handler2 // error

// 可选参数和剩余参数
let afunc = (p1: number, p2: number) => { }
let bfunc = (p1?: number, p2?: number) => { }
let cfunc = (...args: number[]) => { }
afunc = bfunc
afunc = cfunc
bfunc = afunc
bfunc = afunc
cfunc = afunc
cfunc = bfunc

// 2）参数类型
let handler3 = (a: string) => { }
// hof(handler3) // error

interface Point3D {
    x: number
    y: number
    z: number
}

interface Point2D {
    x: number
    y: number
}

let p3d = (point: Point3D) => { }
let p2d = (point: Point2D) => { }
p3d = p2d
// p2d = p3d // error


// 返回值类型
let f = () => ({ name: 'Alice' })
let g = () => ({ name: 'Alice', location: 'beijing' })
f = g

// 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple // error

// 类兼容性
// 构造函数和静态属性不参与比较
class A {
    constructor(p: number, q: number) { }
    id: number = 1
    // private name: string = ''
}

class B {
    static s = 1
    constructor(p: number) { }
    id: number = 2
}

let aa = new A(1, 2)
let bb = new B(1)
aa = bb
bb = aa

class C1 extends A { }
let cc = new C1(1, 2)
aa = cc
cc = aa

// 泛型兼容性
interface Empty<T> {
    value: T
}
// let obj1: Empty<number> = {}
// let obj2: Empty<string> = {}
// obj1 = obj2

let log11 = <T>(x: T): T => {
    console.log('x')
    return x
}

let log22 = <U>(y: U): U => {
    console.log('y')
    return y
}

log11 = log22
log22 = log11




// 类型保护
// TypeScript 能够在特定的区块中保证变量属于某种确定的类型
// 可以在此区块中放心地引用此类型的属性，或者调用此类型的方法

enum Type { Strong, Week }

class Java {
    helloJava() {
        console.log('Hello Java')
    }
    java: any
}

class JavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript')
    }
    javascript: any
}

function isJava(lang: Java | JavaScript): lang is Java { // 返回值：类型谓词
    return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x?: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript()

    if(isJava(lang)) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }

    // if(lang.helloJava) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }

    // instanceof
    // if (lang instanceof Java) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }

    // in
    // if ('java' in lang) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }

    // typeof
    // if (typeof x === 'string') {
    //     x.length
    // } else {
    //     x.toFixed(2)
    // }

    return lang
}

getLanguage(Type.Strong)