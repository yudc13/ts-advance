"use strict";
exports.__esModule = true;
/**
 * 可以把方法定义在类块中或者构造函数中，但不能在类块中给原型添加原始值或对象作为成员数据
 */
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.age = 20;
        this.hobby = ['playing', 'running']; // 上面的是初始值
        this.name = name; // 构造函数中的赋值
        this.age = age;
    }
    // 类方法
    // 存放在原型对象上
    Person.prototype.eat = function (who) {
        console.log(this.name + " \u548C " + who + " \u5728\u5403\u996D");
    };
    return Person;
}());
var p = new Person('jack', 24);
var p2 = new Person('tom', 25);
p.name = 'jack';
// console.log(p.hobby) // [ 'playing', 'running' ]
// console.log(p.hobby === p2.hobby) // false
// console.log(p.eat === p2.eat) // true
console.log(p);
console.log(p2);
