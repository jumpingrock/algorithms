
const areThereDuplicates = (...args) => {
	if (args.length === 0) return null;
	let counter = {}
	for (let i = 0; i < args.length; i++) {
		counter[args[i]] = (counter[args[i]] || 0) + 1;
	}

	for (let j in counter) {
		if (counter[j] > 1) {
			return true
		}
	}
	return false;
}



console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true )