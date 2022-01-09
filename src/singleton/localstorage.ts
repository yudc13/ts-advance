/**
 * 单例模式
 *  构造器是私有的
 *  提供一个静态方法获取类的实例
 *
 * 静态属性和静态方法
 *  类被创建就会为它们分配内存空间，并一直存在
 *
 * TS类中 不允许new一个类中的方法，也不可以为类的prototype上新增属性和方法，但是可以修改
 */
class LocalStorage {
	private constructor() {
		console.log('私有的构造函数')
	}
	// 静态属性
	private static instance: LocalStorage
	// 提供外部获取对象的方法
	static getInstance() {
		// 静态方法中的this指向类本身
		if (!this.instance) {
			return (this.instance = new LocalStorage())
		}
		return this.instance
	}
}

export default LocalStorage
