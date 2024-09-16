function testValid() {
	const entered = [
		[5, 3, 4, 6, 7, 8, 9, 1, 2],
		[6, 7, 2, 1, 9, 5, 3, 4, 8],
		[1, 9, 8, 3, 4, 2, 5, 6, 7],
		[8, 5, 9, 7, 6, 1, 4, 2, 3],
		[4, 2, 6, 8, 5, 3, 7, 9, 1],
		[7, 1, 3, 9, 2, 4, 8, 5, 6],
		[9, 6, 1, 5, 3, 7, 2, 8, 4],
		[2, 8, 7, 4, 1, 9, 6, 3, 5],
		[3, 4, 5, 2, 8, 6, 1, 7, 9],
	];

	console.log("entered(valid):", entered);
	console.log("result:", validSolution(entered));
}

function testInvalid() {
	const entered = [
		[5, 3, 4, 6, 7, 8, 9, 1, 2],
		[6, 7, 2, 1, 9, 0, 3, 4, 8],
		[1, 0, 0, 3, 4, 2, 5, 6, 0],
		[8, 5, 9, 7, 6, 1, 0, 2, 0],
		[4, 2, 6, 8, 5, 3, 7, 9, 1],
		[7, 1, 3, 9, 2, 4, 8, 5, 6],
		[9, 0, 1, 5, 3, 7, 2, 1, 4],
		[2, 8, 7, 4, 1, 9, 6, 3, 5],
		[3, 0, 0, 4, 8, 1, 1, 7, 9],
	];

	console.log("entered(invalid):", entered);
	console.log("result:", validSolution(entered));
}

function validSolution(entered) {
	const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	for (let i = 0; i < 9; i++) {
		if (!arraysEqual(entered[i], list)) return false;
	}
	for (let i = 0; i < 9; i++) {
		if (!arraysEqual(getColumn(entered, i), list)) return false;
	}
	for (let i = 1; i <= 9; i++) {
		if (!arraysEqual(getBlock(entered, i), list)) return false;
	}
	return true;
}

function arraysEqual(arr1, arr2) {
	const sortedArr1 = [...arr1].sort();
	const sortedArr2 = [...arr2].sort();
	if (sortedArr1.length !== sortedArr2.length) return false;
	for (let i = 0; i < sortedArr1.length; i++) {
		if (sortedArr1[i] !== sortedArr2[i]) return false;
	}
	return true;
}

function getColumn(arr, columnNum) {
	return arr.map((x) => x[columnNum]);
}

function getBlock(arr, blockNum) {
	const rowStart = Math.floor((blockNum - 1) / 3) * 3;
	const colStart = 3 * ((blockNum - 1) % 3);
	let result = [];
	for (let row = rowStart; row < rowStart + 3; row++) {
		for (let column = colStart; column < colStart + 3; column++) {
			result.push(arr[row][column]);
		}
	}
	return result;
}

testValid();
testInvalid();