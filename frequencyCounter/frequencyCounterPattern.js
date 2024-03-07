

const same = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;

	let val1 = {};
	let val2 = {};

	for (let i = 0; i < arr1.length; i++) {
		val1[arr1[i]] = ((val1[arr1[i]]) || 0) + 1;
		val2[arr2[i]] = ((val2[arr2[i]]) || 0) + 1;
	}

	console.log(val1)
	console.log(val2)

	for (let key in val1) {
		console.log('key:', key, 'key**2:', key ** 2)
		console.log(key**2  in val2)
		if (!(key **2 in val2)) {
			return false;
		}

		if (val2[key ** 2] !== val1[key]) {
			return false
		}
	}

	return true;
}

console.log(same([1,2,3,2,5], [9,1,4,4,11]))