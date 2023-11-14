/* Challenge 9:
Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec'
Expected output : 'e'
*/
function firstNonRepeatedChar(str) {
	for(var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if(str.indexOf(ch) == i && str.indexOf(ch, i+1) == -1) return ch;
	}
	return null;
}
console.log(firstNonRepeatedChar("abacddbec"));
console.log(firstNonRepeatedChar("ababcd"));
