const search = (array, val) => {
	if (array.length === 0) return -1;
	let min = 0;
	let max = array.length-1;


	while (min <= max) {
		let middle = Math.floor((max + min) / 2);
		let currentElement = array[middle]
		console.log('midpoint: ', currentElement, middle)
		if (currentElement === val){
			return middle;
		}

		if (val > currentElement) {
			console.log('array[midPoint] < val', currentElement, val);
			min = middle + 1;
		}

		if (val < currentElement) {
			console.log('array[midPoint] > val', currentElement, val);
			max = middle -1;
		}
	}
	return -1;
}

console.log(search([1,2,3,4,5,6,7,8,9,10,11,12,13], 13))
console.log(search([], 13))