/* Challenge 30:
Description:
Implement a throttle function that ensures a given function
is not called more than once in a specified time interval.
Solution Approach:
Use a timestamp to track the last invocation time and prevent
calling the function if it's within the throttle interval.
*/
function throttle(func, interval) {
  let lastExecution = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastExecution >= interval) {
      lastExecution = now;
      func.apply(this, args);
    }
  };
}

// Example usage:
function doSomething() {
  console.log('Hello from Scaler Discord!');
}

const throttledFunction = throttle(doSomething, 2000); // Throttling for 2 seconds

// Calling the throttled function multiple times in a short interval
throttledFunction(); // Executes
throttledFunction(); // Doesn't execute
setTimeout(throttledFunction, 1000); // Doesn't execute
setTimeout(throttledFunction, 2500); // Executes after 2 seconds
