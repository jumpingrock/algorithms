

const selectionSort = (arr) => {
	let smallest = 0;
	let positionOfSmallest = 0;

	for (let i = 0; i < arr.length; i++) {
		smallest = i
		for (let j = i+1; j < arr.length; j++) {
			if (arr[j] < arr[smallest]) {
				smallest = j
				positionOfSmallest = j
			};
		}
		const temp = arr[i];
		arr[i] = arr[smallest];
		arr[smallest] = temp;
	}
	return arr;
}



console.log(selectionSort([9,3,5,1,6,4]))
console.log(selectionSort([37, 45, 29, 8]))