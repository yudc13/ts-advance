class Person {
	public name: string
	public age: number
	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}
	say() {
		console.log('name: ', this.name, 'age: ', this.age)
	}
}

// 类似 Parameters
type PersonParameters<T> = T extends new (...args: infer P) => any ? P : never

const p = new Person('jack', 12)
// 获取Person对象变量的类型（构造函数的类型）
type PersonType = typeof Person
// 获取构造函数的参数
type PersonParamsType = PersonParameters<PersonType>

// 通用构造函数类型
type ConstructorType<T> = new (...args: any) => T

function createInstancefactory<T>(Constructor: ConstructorType<T>, ...args: PersonParamsType) {
	return new Constructor(...args)
}

createInstancefactory(Person, 'jack', 23).say()

export {}
