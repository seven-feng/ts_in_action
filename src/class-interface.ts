// 类与接口的关系

interface Human { // 接口只能约束类的共有成员
    name: string
    eat(): void
}

class Asian implements Human { // 类实现接口的时候，必须实现接口中的所有属性
    constructor(name: string) {
        this.name = name
    }
    name: string
    eat() { }
}

// 接口可以相互继承，一个接口可以继承多个接口
interface Man extends Human {
    run(): void
}

interface Child {
    cry(): void
}

interface Boy extends Man, Child {}

// ts 的核心原则之一是对值所具有的结构进行类型检查，
// 在这里并不能说 boy 实现了 Boy 接口，而是 boy 需要满足 Boy 中的定义
let boy: Boy = { // 定义一个对象，符合 Boy 接口定义？
    run() {},
    name: '',
    eat() {},
    cry() {}
}

// 接口继承类
class Auto {
    state = 1
    // private state2 = 0 
}

// 接口 AutoInterface 继承了类 Auto（含私有成员），那么 AutoInterface 只能被 Auto 或 Auto 的子类实现
interface AutoInterface extends Auto {

}

class C implements AutoInterface {
    state = 1
}

class Bus extends Auto implements AutoInterface {

}