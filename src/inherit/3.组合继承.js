/**
 * 组合继承（原型链继承+借用构造函数继承）
 * 优点：
 *  1. 可以继承父类实例的属性和方法
 *  2. 可以继承父类原型对象上的属性和方法
 *  3. 可以给父类构造函数传递参数
 * 缺点：
 *  1. 父类被调用两次
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
	Parent.call(this, name, age) // 调用第二次
	this.addr = addr
	this.hobby = hobby
}

// 原型链继承
Son.prototype = new Parent() // 调用一次，这里传递的参数是无意义的
Son.prototype.constructor = Son
