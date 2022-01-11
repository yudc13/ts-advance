/**
 * 组合寄生继承
 */

function _extends(superType, subType) {
	function Fn() {
		this.constructor = subType
	}
	if (superType !== null) {
		Fn.prototype = superType.prototype
		subType.prototype = new Fn()
	} else {
		Fn.prototype = Object.create(superType)
	}
}

function Parent(name) {
	this.name = name
}
Parent.prototype.eat = function () {}

function Son(name, age) {
	Parent.call(this, name)
	this.age = age
}

_extends(Parent, Son)

Parent.prototype.play = function () {}

const son = new Son('小米', 24)

console.log(son)
