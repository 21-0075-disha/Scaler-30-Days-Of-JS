/* Challenge 20:
Problem Description:
Write a JavaScript function named findFirstNegative
that finds and returns the first negative number
in an array using the find() method.
Inputs:
An array of numbers.
Outputs:
A number representing the first negative number
in the array or undefined if there are no negative numbers.
*/
function findFirstNegative(numsArray) {
	return numsArray.find(n => n<0);
}
const sampleArr = [3, 5, -2, -1, 7];
const firstNegative = findFirstNegative(sampleArr);
console.log(firstNegative);
