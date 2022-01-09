/**
 * 原型继继承
 * 优点：
 *  1. 可以继承父类实例属性和方法
 *  2. 可以访问父类原型对象的属性和方法
 * 缺点：
 *  1. 不能给父类构造函数传递参数
 */

function Parent(name, age) {
	this.name = name
	this.age = age
}

Parent.prototype.eat = function () {
	console.log('Parent: eat()')
}

function Son(addr, hobby) {
	this.addr = addr
	this.hobby = hobby
}

Son.prototype.play = function () {
	console.log('Son: play()')
}

Son.prototype = new Parent('小明', 24)
Son.prototype.constructor = Son
