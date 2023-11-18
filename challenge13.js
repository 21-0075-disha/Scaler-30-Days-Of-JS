/* Challenge 13:
Problem Statement: Implement a memoization function.

Description: Write a function that takes a function as its argument and returns a memoized version of the function.

Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.
*/
function memoize(func) {
  const cache = {}; // Store results of previous function calls

  return function (...args) {
    const key = JSON.stringify(args); // Create a unique key for the function arguments

    if (!cache[key]) {
      cache[key] = func.apply(this, args); // Calculate and store the result if not already cached
    }

    return cache[key]; // Return the cached result for repeated inputs
  };
}

// Example function to be memoized
function add(a, b) {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(5, 7));
console.log(memoizedAdd(5, 7));
