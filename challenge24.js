/* Challenge 24:
Description:
Implement a debounce function that takes a function and a delay as arguments.
The returned function should ensure that the original function is not called
more than once in the specified delay.
Solution Approach:
Use a timer and clear it on each invocation to delay the function execution.
*/
function debounce(func, delay) {
  let timerId;
  
  return function() {
    const context = this;
    const args = arguments;
    
    clearTimeout(timerId);
    timerId = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  };
}
