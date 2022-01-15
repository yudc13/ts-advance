class Animal {
	// 属性声明在实例中
	name = 12
	static eat() {}
	run() {}
}

class Dog extends Animal {
	// 子类不同的方法中使用super的含义不同
	// 在静态方法中 super 指的是父类 而且只能调用父类的静态方法和属性
	static text() {
		console.log(this, super.eat())
	}
	// 在原型上的方法中调用 super指的是 父类的原型对象
	fack() {
		console.log(this, super.run())
	}
}

export {}
