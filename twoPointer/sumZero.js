/*
write a function which accept a sorted array of integer.
function should find the first pair where the sum is 0
return an array that include both values that sums to zero or undefined if a pair does not exist

this solution utilize the 2 pointer approach where you start from both side of the array
and gradually move toward the center.
 */

const sumZero = (sortedArr) => {
	if (sortedArr.length <= 0) return undefined;
	let left = 0;
	let right = sortedArr.length-1;

	while (left < right) {
		const sum = sortedArr[left] + sortedArr[right]
		if (sum === 0) {
			return [sortedArr[left], sortedArr[right]]
		}

		if (sum < 0) {
			left +=1;
		}
		if (sum > 0) {
			right -=1;
		}
	}
	return undefined;
}

console.log(sumZero([-5,-4,-1,0,1,2,3,6]));

console.log(sumZero([-5,-4,-1,0,2,3,6]));

console.log(sumZero([]));