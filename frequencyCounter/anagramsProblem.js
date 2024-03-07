

const anagramsProblem = (str1, str2) => {
	if (str1.length !== str2.length) return false;

	let collection1 = {};
	let collection2 = {};

	for (let i = 0; i < str1.length; i++) {
		collection1[str1[i]] = (collection1[str1[i]] || 0) + 1;
		collection2[str2[i]] = (collection2[str2[i]] || 0) + 1;
	}

	for (let key in collection1) {
		if (!collection2[key]) {
			return false;
		}
		if (collection2[key] !== collection1[key]) {
			return false
		}
	}

	return true;
}

console.log(anagramsProblem('abc', 'cba'), 'expect to be true');

console.log(anagramsProblem('abcbbb', 'cbbbba'), 'expect to be true');

console.log(anagramsProblem('abbbc', 'cba'), 'expect to be false');