const maxSubarraySum = (arr, num) => {
	if (arr.length === 0 || arr.length < num) return null;
	let sum = 0;
	let maxSum = -Infinity;
	for (let i=0; i < num; i++){
		sum += arr[i];
	}

	if (sum > maxSum) maxSum = sum;

	for (let j = num -1; j < arr.length -1; j++) {
		sum = sum - arr[j - num +1] + arr[j + 1];
		if (sum > maxSum) maxSum = sum;

	}
	console.log(maxSum)
	return maxSum;
}


console.log('Expected to return null: ', maxSubarraySum([], 3) === null);
console.log('Expected to return 700: ', maxSubarraySum([100,200,300,400], 2) === 700);
console.log('Expected to return 39: ', maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) === 39);
console.log('Expected to return 5 : ', maxSubarraySum([-3,4,0,-2,6,-1], 2) === 5);
console.log('Expected to return 5 : ', maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) === 5);
console.log('Expected to return null : ', maxSubarraySum([2,3], 3) === null);