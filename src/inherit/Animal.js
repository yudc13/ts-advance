"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal() {
        // 属性声明在实例中
        this.name = 12;
    }
    Animal.eat = function () { };
    Animal.prototype.run = function () { };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 子类不同的方法中使用super的含义不同
    // 在静态方法中 super 指的是父类 而且只能调用父类的静态方法和属性
    Dog.text = function () {
        console.log(this, _super.eat.call(this));
    };
    // 在原型上的方法中调用 super指的是 父类的原型对象
    Dog.prototype.fack = function () {
        console.log(this, _super.prototype.run.call(this));
    };
    return Dog;
}(Animal));
