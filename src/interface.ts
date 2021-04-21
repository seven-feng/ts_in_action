interface List {
    readonly id: number;
    name: string;
    // [x: string]: any; // 字符串索引签名
    age?: number;
}

interface Result {
    data: List[];
}

function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id, value.name)
        if (value.age) {
            console.log(value.age)
        }
    })
}

// 鸭式辨型法，多出来的 age 字段不会做类型检查
let result = {
    data: [
        { id: 1, name: 'a', age: 1 },
        { id: 2, name: 'b' }
    ]
}
render(result)

// 直接用对象字面量，ts 会做类型检查
// 解决：1. 赋值给变量  2. 类型断言 3. 字符串索引签名
// render({
//     data: [
//         {id: 1, name: 'a', age: 1},
//         {id: 2, name: 'b'}
//     ]
// } as Result)


interface StringArray {
    [index: number]: string;
}

let chars: StringArray = ['a', 'b']

interface Names {
    [x: string]: string;
    [z: number]: string; // 数字索引签名的返回值必须是字符串索引签名的返回值的子类型
}

// 变量定义函数类型
let add1: (x: number, y: number) => number

// 接口定义函数类型
// interface Add {
//     (x: number, y: number): number
// }

// 类型别名
type Add = (x: number, y: number) => number
let add2: Add = (x: number, y: number) => x + y


// type：不是创建新的类型，只是为一个给定的类型起一个名字。type还可以进行联合、交叉等操作，引用起来更简洁。
// interface：创建新的类型，接口之间还可以继承、声明合并。
// 如果可能，建议优先使用 interface。

// 混合类型接口
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

let lib: Lib = (() => {}) as Lib
lib.version = '1'
lib.doSomething = () => {}


// 混合接口一般是为第三方类库写声明文件时会用到，很多类库名称可以直接当函数调用，也可以有些属性和方法。