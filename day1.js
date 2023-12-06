import * as lib from './lib.js'
const lines = lib
	.getFile('day1.input')
	.trim()
	.split('\n')

const part1 = lines
	.map(m =>
		[
			m.match(/\d/)[0],
			m.rev().match(/\d/)[0],
		]
	)
	.map(m => +m.join(''))
	.sum()

const values = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9
}

const getValue = (str) => str.length == 1 ? +str : values[str]
const numbers = Object.keys(values)
const pattern = new RegExp(`(\\d|${numbers.join('|')})`)
const pattern_rev = new RegExp(`(\\d|${numbers.map(m => m.rev()).join('|')})`)

const part2 = lines
	.map(m =>
		[
			m.match(pattern)[0],
			m.rev().match(pattern_rev)[0].rev(),
		]
	)
	.map(arr => arr
		.map(getValue)
		.reduce((a, b) => a * 10 + b, 0))
	.sum()

console.log(part1)
console.log(part2)
