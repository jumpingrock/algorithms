// not good enough as this solution is a n log n. lets try to make this n..

const averagePair = (arr, avg) => {
	if (arr.length === 0) return false
	let base = 0;
	let scout = 1;

	while (base < arr.length-1) {
		const pairAvg = (arr[base] + arr[scout])/2;

		if (pairAvg === avg) return true;

		scout +=1;

		if (scout >= arr.length) {
			base += 1;
			scout = base + 1;
		}
	}
	return false;
}

const start = performance.now();
console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([],4)) // false
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
const end = performance.now();
console.log('result: ', end - start);

// remember if this is a sorted array take advantage of that.
const averagePairV2 = (arr, avg) => {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		const sumAvg = (arr[left] + arr[right]) / 2;
		// console.log('sumAvg: ', sumAvg, avg);
		// console.log('left: ', left, 'right: ', right);
		if (sumAvg === avg) return true;

		if (sumAvg < avg) {
			left +=1;
		}
		if (sumAvg > avg) {
			right -=1;
		}
	}
	return false;
}
const start1 = performance.now();
console.log(averagePairV2([1,2,3],2.5)) // true
console.log(averagePairV2([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePairV2([],4)) // false
console.log(averagePairV2([-1,0,3,4,5,6], 4.1)) // false
const end1 = performance.now();
console.log('result: ', end1 - start1);