/*
Write a function called minSubArrayLen which accepts two parameters -
an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal
to the integer passed to the function. If there isn't one, return 0 instead.
 */

const minSubArrayLen = (arr, num) => {
	let maxLength = 100;
	let length = 0;
	let left = 0;
	let right = 1;
	let sum = arr[right] + arr[left];
	if (arr.length === 0) return 0;

	while (right < arr.length) {
		if (sum >= num) {
			length = right - left + 1;
			if (length < maxLength) {
				maxLength = length;
			};
			sum -= arr[left];
			left += 1;
		}else if (sum < num) {
			right +=1
			sum += arr[right];
		}
	}
	return maxLength === 100 ? 0 : maxLength;
}
const start1 = performance.now();
console.log('maxSlice', minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log('maxSlice', minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log('maxSlice', minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log('maxSlice', minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log('maxSlice', minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log('maxSlice', minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log('maxSlice', minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0)
const end1 = performance.now();
console.log('result: ', end1 - start1);