/**
 * Pick: 主要用来提取接口或者type定义的对象的属性
 */

interface Book {
	name: string
	price: number
	store: number
}

type Pick<T, K extends keyof T> = {
	[P in K]: T[P]
}

type MyBook = Pick<Book, 'name' | 'price'>

interface Todo {
	title: string
	completed: boolean
	description: string
}

const todoList: Todo[] = [
	{
		title: '学习Typescript',
		completed: false,
		description: '每天学习',
	},
	{
		title: '学习React',
		completed: false,
		description: '每天学习一小节',
	},
]

type MyTodo = Record<string, Pick<Todo, 'title' | 'completed'>>

export {}
