/**
 * 范型
 *  定义不明确，使用明确；编译期间对数据类型进行检查
 *  不能使用Object或者any代替范型
 *    Object和any不能在编译器进行类型检查
 */

// 范型类
// 可以设置默认类型 <T = any>
// 范性约束 <T extends Object>
class ArrayList<T extends Object> {
	public elements: Array<T>
	constructor() {
		this.elements = []
	}
	public add(ele: T) {
		this.elements.push(ele)
	}
	public get(index: number): T {
		return this.elements[index]
	}
}

const stu = { name: 'jack', age: 20 }

const list = new ArrayList<typeof stu>()

list.add({ name: 'tom', age: 21 })
