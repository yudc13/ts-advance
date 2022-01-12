/**
 * 1. Object.setPrototypeOf() // 设置对象的原型(__proto__)
 * 2. Object.create() // 返回一个对象 对象的__proto__指向传入的对象
 * 3. Object.prototype.hasOwnProperty()
 * 4. for in  // 遍历对象上除了Symbol以外可枚举的属性，包括继承的可枚举属性
 */

function myCreate(prototype) {
	function Fn() {}
	Fn.prototype = prototype
	return new Fn()
}

const obj = myCreate({ name: 'jack' })
const obj2 = Object.create({ name: 'jack' })

Object.setPrototypeOf(obj2, { age: 1 })

console.log(obj)

console.log(obj2)

// 继承静态属性和方法
// 第一种
;(function (Son, Parent) {
	for (let key in Parent) {
		if (Object.prototype.hasOwnProperty.call(Parent, key)) {
			Son[key] = Parent[key]
		}
	}
})()

// 第二种
;(function (Son, Parent) {
	Son.__proto__ = Parent
})()

// 第三种
;(function (Son, Parent) {
	Object.prototype.setPrototypeOf(Son, Parent)
})()

// 继承非静态属性和方法

