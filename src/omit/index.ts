interface Todo {
	title: string
	completed: boolean
	description: string
}

// type Omit<T, K extends keyof T> = {
//   [P in Exclude<keyof T, K>]: T[P]
// }

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

// Omit 剔除某个属性
type MyTodo = Omit<Todo, 'description'>

type MyTodo2 = Exclude<keyof Todo, 'description'>

export {}
