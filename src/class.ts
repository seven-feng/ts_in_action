// 类：继承和成员修饰符
class Dog {
    constructor(name: string) {
        this.name = name
    }
    public name: string // 这里 ts 和 es6 有区别，ts 中必须写出来，而且要初始化
    run() { }
    private pri() { } // 只能在类中访问
    protected pro() { } // 只能在类及其子类中访问
    readonly legs: number = 4 // 只读属性，而且要初始化
    static food: string = 'bones' // 类的静态成员
}

console.log(Dog.prototype)

let dog = new Dog('wangwang')
console.log(dog)
console.log(Dog.food)


class Husky extends Dog {
    constructor(name: string, public color: string) { // 构造函数参数加上成员修饰符，自动变成实例属性
        super(name);
        // this.color = color;
        this.pro()
    }
}

let husky = new Husky('wahaha', 'red')
console.log(husky.color)
console.log(Husky.food)

