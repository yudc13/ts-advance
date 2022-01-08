/**
 * prototype:
 *  函数特有的一个属性，它可以被构造函数的实例对象共享的一个对象
 * __proto__:
 *  对象特有的一个属性，实例对象的__proto__指向它构造函数的prototype
 * 原型链:
 *  当访问实例对象的属性时，首先会在实例对象上查找，如果没有查找到，就会沿着实例对象的__proto__属性去查找，直到找到Object.prototype.__proto__为止
 *
 */

function User() {}

console.log(User.prototype.__proto__ === Object.prototype) // true
console.log(User.__proto__ === Function.prototype) // true
console.log(Function.__proto__ === Function.prototype) // true
