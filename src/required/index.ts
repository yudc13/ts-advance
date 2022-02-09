interface Todo {
	title: string
	completed: boolean
	description: string
	date?: string
}

type Required<T> = {
  [P in keyof T]-?: T[P]
}

type Partial<T> = {
  [P in keyof T]?: T[P]
}

type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

type MyTodo = Required<Todo>

type MyTodo2 = Partial<Todo>

type MyTodo3 = Readonly<Todo>

export {}
