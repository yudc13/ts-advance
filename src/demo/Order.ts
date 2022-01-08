class Order {
	// 这里使用public修饰符 表明这个是一个属性 而不是参数
	// 这样的话就可以省去下面的赋值操作
	constructor(public id: string, public datetime: Date) {
		// this.id = id
		// this.datetime = new Date()
	}
}

const order = new Order('1', new Date())
console.log(order)
