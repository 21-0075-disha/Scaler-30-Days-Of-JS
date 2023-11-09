/* Challenge 4:
Write a JavaScript program to find the
area of a triangle where three sides are 5, 6, 7.
*/
const a = 5; // side 1
const b = 6; // side 2
const c = 7; // side 3
let k = (a + b + c) / 2;
// Using Heron's Formula
let area_of_triangle = Math.sqrt(k * (k - a) * (k - b) * (k - c));
console.log(area_of_triangle);
