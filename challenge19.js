/* Challenge 19:
Problem Description:
Write a JavaScript function named allPositive
that checks whether all numbers in a given array
are positive using the every() method.
Inputs:
An array of numbers.
Outputs:
A boolean value. Return true if all
numbers are positive, otherwise false.
*/
function allPositive(arr) {
  return arr.every(number => number > 0);
}
let numbers1 = [1, 2, 3, 4, 5];
console.log(allPositive(numbers1)); // Output: true

let numbers2 = [-1, 2, 3, -4, 5];
console.log(allPositive(numbers2)); // Output: false
