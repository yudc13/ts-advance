/**
 * 可以把方法定义在类块中或者构造函数中，但不能在类块中给原型添加原始值或对象作为成员数据
 */
class Person {
	// 类属性
	// 这些属性存在与类实例上
	public name: string
	public age: number = 20
	public hobby: string[] = ['playing', 'running']
	// constructor(name: string, age: number) {
	// 	this.name = name
	// 	this.age = age
	// }
	// 类方法
	// 存放在原型对象上
	public eat(who: string) {
		console.log(`${this.name} 和 ${who} 在吃饭`)
	}
}

const p = new Person()
const p2 = new Person()
p.name = 'jack'
// console.log(p.hobby) // [ 'playing', 'running' ]
// console.log(p.hobby === p2.hobby) // false
// console.log(p.eat === p2.eat) // true
console.log(p)
console.log(p2)
