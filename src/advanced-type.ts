// 高级类型

// 交叉类型和联合类型
interface DogInterface {
    run(): void
}

interface CatInterface {
    jump(): void
}

let pet: DogInterface & CatInterface = { // 交叉类型：并集
    run() { },
    jump() { }
}

let a2: number | string = 'a' // 联合类型
let b2: 'a' | 'b' | 'c'
let c2: 1 | 2 | 3

class Dog2 implements DogInterface {
    run() { }
    eat() { }
}

class Cat2 implements CatInterface {
    jump() { }
    eat() { }
}
enum Master { Boy, Girl }
function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog2() : new Cat2()
    pet.eat()
    return pet
}

interface Square {
    kind: 'square'
    size: number
}

interface Rectangle {
    kind: 'rectangle'
    width: number
    height: number
}

interface Circle {
    kind: 'circle'
    r: number
}

type Shape = Square | Rectangle | Circle
function area(s: Shape) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size
        case 'rectangle':
            return s.height * s.width
        case 'circle':
            return Math.PI * s.r ** 2
        default:
            return ((e: never) => {
                throw new Error(e)
            })(s)
    }
}
console.log(area({ kind: 'circle', r: 1 }))

// 索引类型
let obj1 = {
    a: 1,
    b: 2,
    c: 3
}

function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
}
console.log(getValues(obj1, ['a', 'b']))
// console.log(getValues(obj1, ['e', 'f']))

//keyof T 表示类型 T 的所有公共属性的字面量的联合类型
interface Obj {
    a: number,
    b: string
}

let key: keyof Obj

// T[k]
let value: Obj['a'] // 对象 T 的属性 K 代表的类型

// T extends U


// 映射类型
interface Obj3 {
    a: string
    b: number
    c: boolean
}

type ReadonlyObj = Readonly<Obj3>

type PartialObj = Partial<Obj3>

type PickObj = Pick<Obj3, 'a' | 'b'>

type RecordObj = Record<'x' | 'y', Obj>

// 条件类型

// T extends U ? X : Y
type TypeName<T> =
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined' :
    T extends Function ? 'Function' :
    'object'

type T1 = TypeName<string>
type T2 = TypeName<string[]>

// (A | B) extends U ? X : Y
type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T
type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>
// Exclude<T, U>

type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>
// NonNullable<T>

// Extract<T, U>
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>

// ReturnType<T>
type T7 = ReturnType<() => string>