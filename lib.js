import { readFileSync } from 'fs'

String.prototype.rev = function() {
	return this.split('').reverse().join('')
}

Array.prototype.sum = function() {
	return this.reduce((a, b) => a + b, 0)
}

Array.prototype.prod = function() {
	return this.reduce((a, b) => a * b, 1)
}

Array.prototype.max = function() {
	return this.reduce((a, b) => a > b ? a : b, Number.MIN_SAFE_INTEGER)
}

Array.prototype.min = function() {
	return this.reduce((a, b) => a < b ? a : b, Number.MAX_SAFE_INTEGER)
}

export function getFile(filename) {
	return readFileSync(filename, 'utf-8')
}

