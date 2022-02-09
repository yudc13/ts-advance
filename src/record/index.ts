type Worker = {
	name: string
}

type Customer = {
	name: string
	age: number
}

type oneType<T, K> = K extends keyof T ? K : never

// keyof any -> string | number | symbol

type oneAnyType<K> = K extends keyof any ? K : never

type res = oneAnyType<string> // string

let count = 3
type res2 = oneAnyType<typeof count> // number

type Record<K extends keyof any, T> = {
	[P in K]: T
}

export {}
