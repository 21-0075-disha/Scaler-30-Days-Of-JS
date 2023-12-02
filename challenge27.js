/* Challenge 27:
Description:
Write a generator function range that takes two arguments,
start and end, and yields all the numbers in that range.
Solution Approach:
Use the function* syntax for generator functions and the yield keyword.
*/
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const myRange = range(1, 5);
for (const num of myRange) {
  console.log(num);
}
