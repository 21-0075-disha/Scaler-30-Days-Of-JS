/* Challenge 18:
Write a JavaScript function named doubleValues
that takes an array of numbers and returns a
new array where each number is doubled
using the map() method.
Inputs:
An array of numbers.
Outputs:
An array of numbers where each number is doubled.
*/
function doubleValues(numsArray) {
	const doubleTheArr = numsArray.map(function(n) {
		return n * 2;
	});
	return doubleTheArr;
}
const sampleArray = [1, 2, 3, 4, 5];
const results = doubleValues(sampleArray);
console.log(results);
