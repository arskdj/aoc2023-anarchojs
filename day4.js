import { getFile, range } from './lib.js'
const input =
	getFile('day4.input')
		//getFile('day4.test')
		.trim()
		.split('\n')
		.map(row => row.split(':')[1])
		.map(row => row.split('|').map(p =>
			Array.from(p.matchAll(/\d+/g), m => +m[0])
		))


const matches = input.map(([winning, nums]) =>
	winning.filter(x => nums.includes(x)))

const part1 = matches
	.filter(arr => arr.length > 0)
	.map(x => 1 << x.length - 1)
	.sum()

const counts = new Array(input.length).fill(0)
const processCard = i => {
	counts[i]++
	let len = matches[i].length
	if (len === 0) return
	let end = [i + len, input.length - 1].min()
	range(i + 1, end).forEach(processCard)
}

range(0, input.length - 1).forEach(processCard)
const part2 = counts.sum()

console.log(part1)
console.log(part2)
