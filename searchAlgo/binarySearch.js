function binarySearch(arr, target){
	let start = 0;
	let end = arr.length-1
	let mid = 0;

	while (arr[mid] !== target && start <= end) {
		mid = Math.floor((end + start) / 2);
		if (target < arr[mid]) 	end = mid - 1;
		else start = mid + 1;
	}
	// console.log(start, mid, end)
	return arr[mid] === target ? mid : -1
}


console.log(binarySearch([1,2,3,4,5],2) === 1) // 1
console.log(binarySearch([1,2,3,4,5],3) === 2) // 2
console.log(binarySearch([1,2,3,4,5],5) === 4) // 4
console.log(binarySearch([1,2,3,4,5],6) === -1) // -1
console.log(binarySearch([
	5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
	40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) === 2) // 2
console.log(binarySearch([
	5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
	40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) === 16) // 16
console.log(binarySearch([
	5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
	40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) === -1) // -1