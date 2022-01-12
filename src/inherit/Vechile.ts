// 父类
class Vechile {
	public brand: string // 品牌
	public vechileNo: string // 车牌号
	public days: number // 租赁天数
	public total: number // 租赁费用
	public deposit: number // 押金
	constructor(brand: string, vechileNo: string, days: number, deposit: number) {
		this.brand = brand
		this.vechileNo = vechileNo
		this.days = days
		this.total = 0
		this.deposit = deposit
	}

	// 计算租金
	public calculateRent() {
		console.log(`品牌：${this.brand} 车牌号是：${this.vechileNo} 开始被租用`)
		return 0
	}

	// 支付方式
	public payDesposit() {}
}

class Car extends Vechile {
	public type: string // 型号
	constructor(brand: string, vechileNo: string, days: number, deposit: number, type: string) {
		// 调用父类构造函数
		// 相当于es5中的借用构造函数继承 -> _this = Vechile.call(this, ...args)
		// 如果显示声明constructor 那么必须在开头调用super()
		super(brand, vechileNo, days, deposit)
		this.type = type
	}

	// 根据型号获取租金
	public getPriceByType() {
		if (this.type === '宝马') {
			return 100
		}
		if (this.type === '奔驰') {
			return 200
		}
		if (this.type === '法拉利') {
			return 500
		}
		if (this.type === '宾利') {
			return 800
		}
		return 0
	}

	// 计算租金
	public calculateRent() {
		// 这里的super指定是父类的 _super.prototype.calculateRent.call(this);
		// *** super 只能访问父类的方法 不能访问父类属性 ***
		super.calculateRent()
		return (this.total = this.getPriceByType() * this.days)
	}
}

const baoma = new Car('宝马', 'bmw', 4, 5000, '宝马')

console.log(baoma.calculateRent())

export {}
