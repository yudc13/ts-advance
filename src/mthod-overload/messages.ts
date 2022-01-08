interface Message {
	id: number
	type: string
	msg: string
}

const messages: Message[] = []

// 函数重载:
// 一个实现签名和一个或者多个重载签名,调用的是重载签名而不是实现签名

export function getMessage(id: number): Message | undefined
export function getMessage(type: string, limit: number): Message[]

// 实现签名可以是一个无参数的函数签名，但是如果实现签名想要包含
// 重载签名的某个位置的参数，那么实现签名的函数必须兼容所有重载签名的参数类型(联合类型｜any|unknown)其中一种
// function getMessage(): Message | Message[] {
// 	return []
// }

// 实现签名函数可以不写返回值类型
export function getMessage(payload: number | string, limit?: number) {
	if (typeof payload === 'number') {
		return messages.find((msg) => msg.id === payload)
	}
	return messages.filter((msg) => msg.type === payload).slice(0, limit)
}

const msg = getMessage('', 2)

console.log(msg)
