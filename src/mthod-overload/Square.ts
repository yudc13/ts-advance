type Chart = {
	width: number
	height: number
}
class Square {
	public width: number
	public height: number
	constructor(width: number, height: number)
	constructor(chart: Chart)
	constructor(params: any, value: number = 0) {
		if (typeof params === 'object') {
			this.width = params.width
			this.height = params.height
		} else {
			this.width = params
			this.height = value
		}
	}

	getArea(): number {
		return this.width * this.height
	}
}

let p = new Square(3, 5)
console.log(p.getArea())
let p2 = new Square({ width: 3, height: 4 })
console.log(p2.getArea())
