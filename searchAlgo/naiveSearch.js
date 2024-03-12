/*
loop over a longer string, match the character of the shorter string. if the char dont match break out of the inner
loop. if the char match keep going. if you complete the inner loop and find a full match increase the count of
match by 1
 */

const isCharMatch = (longStr, shortStr) => {
	let matchCount = 0;
	for (let i = 0; i < longStr.length; i++) {
		if (longStr[i] === shortStr[0]) {
			for (let j=1; j < shortStr.length; j++) {
				if (longStr[i+j] === shortStr[j]) {
					if (j === shortStr.length -1) matchCount ++;
				}
			}
		}
	}

	return matchCount;
}

console.log(isCharMatch('asdrqwcqa', 'sss'))
console.log(isCharMatch('helloworld', 'wor'))
console.log(isCharMatch('thisisthe issue', 'is'))