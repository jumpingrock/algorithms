/*
write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the max sum of n consecutive element in the array.
 */

const maxSubarraySum = (arr, num) => {
	if (arr.length === 0) return null;
	let maxSum = 0;
	let tempSum = 0;

	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum
	for (let j = num; j < arr.length; j++) {
		tempSum = tempSum - arr[j-num] + arr[j];
		maxSum = Math.max(tempSum, maxSum)
	}

	return maxSum;
}


console.log('Expected to return null: ', maxSubarraySum([], 3) === null);
console.log('Expected to return 21: ', maxSubarraySum([1,2,3,4,5,6,7,8], 3) === 21);
console.log('Expected to return 12: ', maxSubarraySum([9,1,2,3,4,5], 3) === 12);
console.log('Expected to return 12 : ', maxSubarraySum([8,1,1,2,3,4,5], 3) === 12);
