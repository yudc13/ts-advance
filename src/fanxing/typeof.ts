const obj = { name: 'jack', age: 23 }

type objType = typeof obj

// 获取一个类或者一个对象类型或者一个接口类型的所有属性名[key]组成的联合类型
type objKeyof = keyof objType

// 可以合起来
type objKeyof2 = keyof typeof obj

class Person {
	public name: string
	public age: number
	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}
}

class ObjImpl<T extends Object, K extends keyof T> {
	private readonly object
	private readonly key
	constructor(object: T, key: K) {
		this.object = object
		this.key = key
	}
	get() {
		return this.object[this.key]
	}
	set(newVal: T[K]) {
		this.object[this.key] = newVal
	}
}
const p = new Person('jack', 24)
const objImpl = new ObjImpl(p, 'name')
console.log(objImpl.get())
objImpl.set('tom')
console.log(objImpl.get())
