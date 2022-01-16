// 泛型函数重载
function sort(data: string, count?: number): string
function sort<T>(data: T, count?: number): T
function sort(data: any, count: number = 5): any {
	if (typeof data === 'string') {
		return ''
	}
	return []
}

// 通用函数类型
type commonFunc = (...args: any) => any // 等同于下面
interface CommonFuncInter {
	(...args: any): any
}

class Person {
	public name: string
	constructor(name: string) {
		this.name = name
	}
	say() {}
}

// 工厂函数类型
// 表示后面的函数是一个构造函数类型
type ConstructorType<T> = new (...args: any) => T

function createInstancefactory<T>(Constructor: ConstructorType<T>) {
	// 这里可以做点其他的...
	return new Constructor()
}

const p = createInstancefactory<Person>(Person)
console.log(p.name)
