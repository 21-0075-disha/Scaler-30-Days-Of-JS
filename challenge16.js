/* Challenge 16:
Problem Description:
Write a JavaScript function named sumArray that
takes an array of numbers and returns the sum
of all the numbers in the array using the reduce() method.
Inputs: An array of numbers.
Outputs: A number representing the sum of the array.
*/
function sumArray(numsArray) {
	const sm = numsArray.reduce((acc, curr) => {
		return acc + curr;
	}, 0);
	return sm;
}
const sampleArray = [1, 2, 3, 4, 5];
const res = sumArray(sampleArray);
console.log(res);
