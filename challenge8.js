/* Challenge 8:
Write a JavaScript function to get all possible
subsets with a fixed length (for example 2) combinations in an array.
Sample array : [1, 2, 3] and subset length is 2
Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
*/
function getRequiredSubsets(arr, length) {
  const subs = [];
  function generateSubs(subset, index) {
    if(subset.length === length) subs.push(subset.slice());
    else {
      for(let i = index; i < arr.length; i++) {
        subset.push(arr[i]);
        generateSubs(subset, i+1); // recursive
        subset.pop();
      }
    }
  }
  generateSubs([], 0);
  return subs;
}
const sampleArr = [1, 2, 3];
const subsetLength = 2;
const res = getRequiredSubsets(sampleArr, subsetLength);
console.log(res);
