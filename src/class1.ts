// 抽象类和多态

abstract class Animal {
    eat() { // 实现方法的复用
        console.log('eat')
    }
    abstract sleep(): void // 抽象方法
}

class Dog1 extends Animal {
    constructor(name: string) {
        super()
        this.name = name
    }
    name: string

    sleep() {
        console.log('dog sleep')
    }
}

let dog1 = new Dog1('wangwang')
dog1.eat()
dog1.sleep()

class Cat extends Animal {
    sleep() {
        console.log('cat sleep')
    }
}

let cat = new Cat()
let animals: Animal[] = [dog1, cat]

animals.forEach( i => {
    console.log(i.sleep()) // 多态，运行时绑定
})

// 链式调用
class WorkFlow {
    step1() {
        return this
    }
    step2() {
        return this
    }
}

new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
    next() {
        return this
    }
}

new MyFlow().next().step1().step2().next()