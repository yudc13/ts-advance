/**
 *  infer 占位符式 修饰类型的关键字，只允许出现在extends（泛型约束）中，使用的时候才能知道具体类型
 *  出现的位置：
 *    1. 函数参数
 *    2. 函数返回值
 *    3. 泛型类型具体化类型上
 */

interface Person {
	name: string
	age: number
}
// 出现在函数参数位置
type inferType<T> = T extends (args: infer P) => string ? P : T

// 出现在函数返回值
type inferReturnType<T> = T extends (args: any) => infer P ? P : T

// 出现在泛型类型上
type setType<T> = T extends Set<infer P> ? P : T

type personType = inferReturnType<(params: Person) => string>
