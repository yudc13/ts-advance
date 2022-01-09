/**
 * 借用构造函数继承
 * 优点：
 *  1. 可以给父类传递参数
 * 缺点：
 *  1. 不能继承父类原型对象上的属性和方法
 */

function Parent(name, age) {
	this.name = name
	this.age = age
}

Parent.prototype.eat = function () {
	console.log('Parent eat()')
}

function Son(name, age, addr, hobby) {
	// 调用父类的构造函数
	// 这样的话父类上的属性和方法都会挂载到Son上
	Parent.call(this, name, age)
	this.addr = addr
	this.hobby = hobby
}
