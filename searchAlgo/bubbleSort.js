

const bubbleSort = (arr) => {
	let temp = 0;
	let noSwap = false;
	let count = 0;
	for (let i = arr.length; i > 0; i--) {
		noSwap = true
		for (let j = 0; j < i; j++) {
			count ++;
			console.log(count ,arr);
			if (arr[j-1] > arr[j]) {
				noSwap = false;
				temp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = temp;
			}
		}

		if (noSwap) {
			return arr;
		}
		isPosition
	}
}


console.log(bubbleSort([9,3,5,1,6,4]))
console.log(bubbleSort([37, 45, 29, 8]))