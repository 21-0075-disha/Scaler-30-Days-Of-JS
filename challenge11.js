/* Challenge 11:
Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
*/
var student = {
	name: "Dipsha Biswas",
	sclass: "B.Tech ECE",
	rollno: 7
};
function listOfProperties(obj) {
	return Object.keys(obj).join(',');
}
var properties = listOfProperties(student);
console.log(properties);
