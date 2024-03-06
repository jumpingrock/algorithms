

const addUpToFirst = (n: number) :number => {

	let result = 0;
	for (let i = 1; i <= n; i++) {
		result += i;
	}
	console.log(`Answer 1: ${result}`)
	return result;
}

const addUpToSecond = (n: number) : number => {
	const result = n * (n + 1) / 2;
	console.log(`Answer 2: ${result}`);
	return result;
}

const timeStart1 = performance.now();

addUpToFirst(100);

const endTime1 = performance.now();
console.log(`Time Elapsed: ${(endTime1 - timeStart1)} ms`);

// -----------------

const timeStart2 = performance.now();

addUpToSecond(100);

const endTime2 = performance.now();
console.log(`Time Elapsed: ${(endTime2 - timeStart2)} ms`);
