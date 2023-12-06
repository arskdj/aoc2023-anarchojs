import * as lib from './lib.js'
const input = lib
	.getFile('day2.input')
	//.getFile('day2.test')
	.trim()
	.split('\n')
	.map(game => game.split(':')[1])
	.map((v, i) => {
		let sets = [...v.matchAll(/((\d+) (red|green|blue))/g)]
			.map(arr => [arr[3], +arr[2]])
		return {
			id: i + 1,
			sets,
		}
	})

function setIsValid(set) {
	const constraints = {
		red: 13,
		green: 14,
		blue: 15
	}

	return set[1] < constraints[set[0]]
}

function getMaxRGB(game) {
	return [
		game.sets.filter(s => s[0] === "red").map(s => s[1]).max(),
		game.sets.filter(s => s[0] === "green").map(s => s[1]).max(),
		game.sets.filter(s => s[0] === "blue").map(s => s[1]).max(),
	]
}

const part1 = input
	.filter(g => g.sets.every(setIsValid))
	.map(g => g.id)
	.sum()

const part2 = input
	.map(getMaxRGB)
	.map(s => s.prod())
	.sum()


console.log(part1)
console.log(part2)
