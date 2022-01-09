/**
 * 组合寄生继承
 */

function _extends(superType, subType) {
	function Fn() {
		this.constructor = subType
	}
	Fn.prototype = superType.prototype
	return new Fn()
}

function Parent(name) {
	this.name = name
}
Parent.prototype.eat = function () {}

function Son(name, age) {
	Parent.call(this, name)
	this.age = age
}

Son.prototype = _extends(Parent, Son)

Parent.prototype.play = function () {}

const son = new Son('小米', 24)

console.log(son)
