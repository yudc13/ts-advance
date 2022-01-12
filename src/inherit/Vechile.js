'use strict'
var __extends =
	(this && this.__extends) ||
	(function () {
		var extendStatics = function (d, b) {
			extendStatics = function (d, b) {
				console.log('b: ', b)
				for (var p in b) {
					console.log('p: ', p)
					if (Object.prototype.hasOwnProperty.call(b, p)) {
						d[p] = b[p]
					}
				}
			}
			return extendStatics(d, b)
		}
		return function (d, b) {
			extendStatics(d, b)
			function __() {
				this.constructor = d
			}
			d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
		}
	})()
exports.__esModule = true
// 父类
var Vechile = /** @class */ (function () {
	function Vechile(brand, vechileNo, days, deposit) {
		this.brand = brand
		this.vechileNo = vechileNo
		this.days = days
		this.total = 0
		this.deposit = deposit
	}
	// 计算租金
	Vechile.prototype.calculateRent = function () {
		console.log(
			'\u54C1\u724C\uFF1A' +
				this.brand +
				' \u8F66\u724C\u53F7\u662F\uFF1A' +
				this.vechileNo +
				' \u5F00\u59CB\u88AB\u79DF\u7528'
		)
		return 0
	}
	// 支付方式
	Vechile.prototype.payDesposit = function () {}
	Vechile.text = function () {}
	return Vechile
})()
var Car = /** @class */ (function (_super) {
	__extends(Car, _super)
	function Car(brand, vechileNo, days, deposit, type) {
		var _this =
			// 调用父类构造函数
			// 相当于es5中的借用构造函数继承 -> _this = Vechile.call(this, ...args)
			// 如果显示声明constructor 那么必须在开头调用super()
			_super.call(this, brand, vechileNo, days, deposit) || this
		_this.type = type
		return _this
	}
	// 根据型号获取租金
	Car.prototype.getPriceByType = function () {
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
	Car.prototype.calculateRent = function () {
		// 这里的super指定是父类的 _super.prototype.calculateRent.call(this);
		_super.prototype.calculateRent.call(this)
		return (this.total = this.getPriceByType() * this.days)
	}
	return Car
})(Vechile)
var baoma = new Car('宝马', 'bmw', 4, 5000, '宝马')
console.log(baoma.calculateRent())
