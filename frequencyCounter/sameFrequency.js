
const sameFrequency = (num1, num2) => {
	const num1Str = num1.toString()
	const num2Str = num2.toString()
	if (num1Str.length !== num2.toString().length) return false;

	let seq1 = {}
	let seq2 = {}

	for (let i=0; i<num1Str.length; i++) {
		seq1[num1Str[i]] = (seq1[num1Str[i]] || 0) +1;
		seq2[num2Str[i]] = (seq2[num2Str[i]] || 0) +1;
	}

	for (let j in num1Str) {
		if (seq1[j] !== seq2[j]) {
			return false
		}
	}
	return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false

// function areThereDuplicates(...args) {
// 	args.sort((a, b) => {
// 		if (a < b) return -1;
// 		if (a > b) return 1;
// 		return 0;
// 	});
//
// 	let start = 0;
// 	let next = 1;
// 	while (next < args.length) {
// 		if (args[start] === args[next]) {
// 			return true;
// 		}
// 		start++;
// 		next++;
// 	}
// 	return false;
// }