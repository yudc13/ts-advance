/**
 * 继承可以相互转化 Son as Parent or Parent as Son
 * 两个类要能相互转换 这两个类的公共属性是子集关系
 */

// 类型守卫
/**
 * typeof
 *
 * in
 * instanceof
 * === == !==
 */

// 自定义类型守卫
function isString(s: any): s is String {
	return typeof s === 'string'
}
