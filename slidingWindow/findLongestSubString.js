/*
Write a function called findLongestSubstring,
which accepts a string and returns the length of the longest substring with all distinct characters.
 */
const findLongestSubstring = (arr) => {
	let right = 0;
	let charCount = 0;
	let charString = '';
	if (arr.length === 0) return 0;

	while (right < arr.length) {
		if (charString.indexOf(arr[right]) < 0) {
			charString += arr[right];
			right += 1;

		} else {
			charString = charString.substring(1, charString.length);
		}

		if (charCount < charString.length) {
			charCount = charString.length;
		}
	}

	return charCount;
}

// function findLongestSubstring(str) {
// 	let longest = 0;
// 	let seen = {};
// 	let start = 0;
//
// 	for (let i = 0; i < str.length; i++) {
// 		let char = str[i];
// 		if (seen[char]) {
// 			start = Math.max(start, seen[char]);
// 		}
// 		// index - beginning of substring + 1 (to include current in count)
// 		longest = Math.max(longest, i - start + 1);
// 		// store the index of the next char so as to not double count
// 		seen[char] = i + 1;
// 	}
// 	return longest;
// }

const start1 = performance.now();
console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6)
const end1 = performance.now();
console.log('result: ', end1 - start1);


