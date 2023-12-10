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

export const getFile = (filename) => readFileSync(filename, 'utf-8')

export const range = (start, stop, step = 1) =>
	Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))
