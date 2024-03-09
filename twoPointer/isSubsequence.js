
/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string
form a subsequence of the characters in the second string. In other words, the function should check whether the
characters in the first string appear somewhere in the second string, without their order changing.
 */
const isSubsequence = (subSeq, target) => {
	let base = 0;
	for (let i = 0; i < target.length; i++) {
		if (subSeq[base] === target[i]) {
			base +=1;
		}
	}
	return subSeq.length === base;
}


console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters))