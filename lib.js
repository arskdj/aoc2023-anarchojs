import { readFileSync } from 'fs'

String.prototype.rev = function() {
	return this.split('').reverse().join('')
}

Array.prototype.sum = function() {
	return this.reduce((a, b) => a + b, 0)
}

export function getFile(filename) {
	return readFileSync(filename, 'utf-8')
}

