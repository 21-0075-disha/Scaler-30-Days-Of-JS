/* Challenge 23:
Problem : Closure Challenge
Description:
Write a function counter that returns a new function on each invocation.
The returned function, when called, should increment the counter value and return it.
Solution Approach:
Utilize closure to maintain the state of the counter.
*/
function counter() {
  let count = 0;
 
  return function() {
    count++;
    return count;
  };
}
 
// Creating instances of the counter function
const incrementCounter1 = counter();
const incrementCounter2 = counter();
 
// Invoking the returned functions to increment the counters
console.log(incrementCounter1()); // Output: 1
console.log(incrementCounter1()); // Output: 2
console.log(incrementCounter1()); // Output: 3
 
console.log(incrementCounter2()); // Output: 1
console.log(incrementCounter2()); // Output: 2
