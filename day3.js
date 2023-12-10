import { getFile, range } from './lib.js'
const input =
	getFile('day3.input')
		//getFile('day3.test')
		.trim()
		.split('\n')

const grid = input.map(line => line.split(''))

const WIDTH = grid[0].length
const HEIGHT = grid.length

const findInGrid = (regex) =>
	input.map((r, index) =>
		Array.from(r.matchAll(regex),
			m => {
				return {
					num: +m[0],
					xmin: m.index,
					xmax: m.index + m[0].length,
					y: index
				}
			})
	).flat()

const numbers = findInGrid(/(\d+)/g)
const gears = findInGrid(/[*]/g)

function getAdjacent(num) {
	let { xmin, xmax, y } = num
	let xrange = range(xmin - 1, xmax)

	return [
		...xrange.map(x => [x, y - 1]),
		...xrange.map(x => [x, y + 1]),
		[xmin - 1, y],
		[xmax, y]
	].filter(([x, y]) => x > -1 && x < WIDTH && y > -1 && y < HEIGHT)

}

function isSymbol(ch) {
	let i = ch.charCodeAt(0)
	return !(i >= 48 && i <= 57) && i != 46
}

function getGearNumbers(gear) {
	return numbers.filter(n =>
		getAdjacent(n).some(([x, y]) => x === gear.xmin && y === gear.y))
}

const part1 = numbers
	.filter(n => getAdjacent(n)
		.some(([x, y]) => isSymbol(grid[y][x])))
	.map(n => n.num)
	.sum()

const part2 = gears
	.map(getGearNumbers)
	.filter(arr => arr.length === 2)
	.map(arr => arr.map(n => n.num).prod())
	.sum()

console.log(part1)
console.log(part2)
