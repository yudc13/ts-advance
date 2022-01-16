interface List<T> {
	add(item: T): void
	get(i: number): T
}

// 抽象类不能创建实例对象
abstract class Animal {
	constructor() {}
	eat() {
		console.log('Animal eat()')
	}
	abstract weight(): void
}

// 实现一个抽象类 必须实现抽象类的所有方法
class Dog implements Animal {
	weight(): void {
		throw new Error('Method not implemented.')
	}
	eat(): void {
		throw new Error('Method not implemented.')
	}
}

// 继承抽象类 必须重写抽象类的抽象方法
class Cat extends Animal {
	weight(): void {
		throw new Error('Method not implemented.')
	}
}

// 实现接口
class LinkList<T> implements List<T> {
	add(item: T): void {
		throw new Error('Method not implemented.')
	}
	get(i: number): T {
		throw new Error('Method not implemented.')
	}
}
