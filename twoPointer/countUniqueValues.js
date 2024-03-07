
/*
implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
 */

const countUniqueValues = (sortedArr) => {
	if (sortedArr.length <= 0) return 0;
	const uniqueArr = new Set(sortedArr);

	// console.log(uniqueArr);
	return uniqueArr.size;
}
const start = performance.now();
console.log(countUniqueValues([0, 1, 2, 2, 2, 2, 2]));

console.log(countUniqueValues([0, 0, 0, 0, 0, 0]));

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]));
const end = performance.now();
console.log('result: ', end - start);

// in order for this to work, array must be sorted. else use the first solution
const countUniqueValueAct = (sortedArr) => {
	if (sortedArr.length <= 0) return 0;
	let base = 0;
	let scout = 1

	while (scout <= sortedArr.length) {
		if (sortedArr[base] !== sortedArr[scout]) {
			base += 1;
			sortedArr[base] = sortedArr[scout];
			scout += 1;
		}
		if (sortedArr[base] === sortedArr[scout]) {
			scout += 1;
		}

		if (scout === sortedArr.length) return base + 1;
	}
}

const start1 = performance.now();
console.log(countUniqueValueAct([0, 1, 2, 2, 2, 2, 2]), 'should equal 3');

console.log(countUniqueValueAct([0, 0, 0, 0, 0, 0]), 'should equal 1');

console.log(countUniqueValueAct([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]), 'should equal 7');

const end1 = performance.now();
console.log('result: ', end1 - start1);