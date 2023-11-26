/* Challenge 21:
Problem Statement: Write an asynchronous loop function that
iterates over an array and performs an asynchronous operation
on each element.
Description: The function should take an array and an async
function, applying the async function to each element in the array in sequence.
Solution Approach: Use async/await within a for...of loop.
*/
async function asyncLoop(array, asyncFunction) {
  for (const element of array) {
    await asyncFunction(element);
  }
}

// The asynchronous function to be performed on each element
async function asyncOperation(item) {
  // Simulating an asynchronous operation (e.g., API call, async task)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Processed: ${item}`);
      resolve();
    }, 1000); // Simulating a delay of 1 second
  });
}

const myArray = [1, 2, 3, 4, 5];

// Calling the async loop function with the array and async function
asyncLoop(myArray, asyncOperation)
  .then(() => {
    console.log('All operations completed.');
  })
  .catch((err) => {
    console.error('Error:', err);
  });
