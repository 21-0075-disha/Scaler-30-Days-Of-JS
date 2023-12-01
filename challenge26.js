/* Challenge 26:
Description:
Write a function calculateTotal that takes an array of numbers,
filters out the even numbers, squares the remaining numbers, and then calculates their sum.
Solution Approach:
Combine map, filter, and reduce array methods.
*/
function calculateTotal(numbers) {
  // Filter out even numbers
  const filteredNumbers = numbers.filter(num => num % 2 !== 0);
  
  // Square the remaining numbers
  const squaredNumbers = filteredNumbers.map(num => num * num);
  
  // Calculate the sum of squared numbers
  const total = squaredNumbers.reduce((acc, curr) => acc + curr, 0);
  
  return total;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = calculateTotal(numbers);
console.log("Total:", result); // Output the total
