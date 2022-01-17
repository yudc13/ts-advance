class People {
	constructor(public name: string) {
		this.name = name
	}
	eat() {}
}

class ChinesePeople extends People {}

type Extract<T, U> = T extends U ? T : never
type extractType = Extract<ChinesePeople, People>

// 配合联合类型使用
type extractType2 = Extract<string | number, string> // string
// 分解如下
// 1. Extract<number, string> // string
// 2. Extract<number, string> // never

// 配合函数
type fun1 = (a: string, b: number) => string
type fun2 = (a: string) => string

// 函数的返回值和参数类型比必须相同
// 参数少的类型 extends 参数多的类型 -> true
type extractType3 = Extract<fun1, fun2> // never
type extractType4 = Extract<fun2, fun1> // fun2

export {}
