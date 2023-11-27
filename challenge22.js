/* Challenge 22:
Problem Statement: Write a function to deeply compare two objects for equality.
Description: Given two objects, the function should return true if they are deeply equal and false otherwise.
Solution Approach: Recursively compare properties of both objects.
*/
function deepEqual(obj1, obj2) {
  // Check if both parameters are objects
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2; // If not objects, compare directly
  }

  // Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // If the number of keys is different, objects are not equal
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Compare each key and value recursively
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true; // Objects are deeply equal
}

// Two sample objects to be compared
const objA = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

const objB = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

console.log(deepEqual(objA, objB)); // Output: true
