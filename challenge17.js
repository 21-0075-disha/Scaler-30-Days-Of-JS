/* Challenge 17:
Problem Description:
Write a JavaScript function named filterOutOdd
that uses the filter() method to filter out
odd numbers from an array.
Inputs:
An array of numbers.
Outputs:
An array of numbers without odd numbers.
*/
function filterOutOdd(nums) {
	return nums.filter(function(nums) {
		return nums % 2 === 0;
	});
}
const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const results = filterOutOdd(sampleArray);
console.log(results);
