/* Challenge 7:
Write a JavaScript program to check a pair of numbers
and return true if one of the numbers
is 50 or if their sum is 50.
*/
function checkNumbers(a, b) {
	return a === 50 || b === 50 || (a + b) === 50;
}

let s1 = checkNumbers(12, 50);
let s2 = checkNumbers(50, 54);
let s3 = checkNumbers(25, 25);
let s4 = checkNumbers(10, 12);
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
