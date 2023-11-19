/* Challenge 14:
Write a JavaScript function to concatenate
a given string n times (default is 1).
Test Data :
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
Outputs:
Ha!
Ha!Ha!
Ha!Ha!Ha!
*/
function repeat(str, n = 1) {
	let resultStr = "";
	for(let i = 0; i < n; i++) resultStr += str;
	return resultStr;
}
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
