/* Challenge 28:
Description:
Create a proxy object that intercepts and logs all property access.
Solution Approach:
Use the Proxy object to create a wrapper around another object.
*/
const target = {
  message1: "hello",
  message2: "everyone",
};
 
const handler = {
  get(target, prop) {
    console.log(`Accessing property: ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Setting property ${prop} to ${value}`);
    target[prop] = value;
  },
};
 
const proxy = new Proxy(target, handler);
 
console.log(proxy.message1); // Output: Accessing property: message1
console.log(proxy.message2); // Output: Accessing property: message2
 
proxy.message1 = "world"; // Output: Setting property message1 to world
console.log(proxy.message1); // Output: Accessing property: message1
 
proxy.message3 = "foo"; // Output: Setting property message3 to foo
console.log(proxy.message3); // Output: Accessing property: message3
