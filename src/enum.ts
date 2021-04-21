// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}

// 反向映射
// var Role;
// (function (Role) {
//     Role[Role["Reporter"] = 1] = "Reporter";
//     Role[Role["Developer"] = 2] = "Developer";
//     Role[Role["Maintainer"] = 3] = "Maintainer";
//     Role[Role["Owner"] = 4] = "Owner";
//     Role[Role["Guest"] = 5] = "Guest";
// })(Role || (Role = {}));

// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}

// var Message;
// (function (Message) {
//     Message["Success"] = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86";
//     Message["Fail"] = "\u62B1\u6B49\uFF0C\u5931\u8D25\u4E86";
// })(Message || (Message = {}));

// 异构枚举
enum Answer {
    N,
    Y = 'YES'
}

// 枚举成员
enum Char {
    // const
    a,
    b = Char.a,
    c = 3 + 1,
    // computed
    d = Math.random(),
    e = '123'.length
}

// 常量枚举
const enum Month {
    Jan,
    Feb,
    Mar
}

enum E { a, b }
let e: E = 3
// console.log(E)