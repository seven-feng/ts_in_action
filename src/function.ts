// 函数定义
function add3(x: number, y: number) {
    return x + y;
}

let add4: (x: number, y: number) => number

type add5 = (x: number, y: number) => number

interface add6 {
    (x: number, y: number): number
}

function add7(x: number, y?: number) {
    return y ? x + y : x;
}

add7(1)

function add8(x: number, y = 0, z: number, q = 1) {
    return x + y + z + q;
}

console.log(add8(1, undefined, 3))

function add9(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur);
}
console.log(add9(1, 2, 3))

// 函数重载
function add10(...rest: number[]): number
function add10(...rest: string[]): string
function add10(...rest: any[]): any {
    let first = rest[0];
    if (typeof first === 'string') {
        return rest.join('');
    } else if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
}

console.log(add10('1', '2', '3'))
console.log(add10(1, 2, 3, 4))