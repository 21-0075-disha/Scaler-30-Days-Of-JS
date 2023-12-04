/* Challenge 29:
Description:
Write a function raceWithTimeout that takes an array of promises and a timeout value.
The function should resolve when the first promise resolves or reject if none resolve within the given timeout.
Solution Approach:
Use Promise.race and a timeout promise.
*/
function raceWithTimeout(promises, timeout) {
  // Creating a timeout promise that rejects after a specified time
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout occurred'));
    }, timeout);
  });

  // Using Promise.race to resolve or reject based on the first promise or timeout
  return Promise.race([...promises, timeoutPromise]);
}
const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 2000));

raceWithTimeout([promise1, promise2], 1500)
  .then(result => {
    console.log('Resolved:', result);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });
