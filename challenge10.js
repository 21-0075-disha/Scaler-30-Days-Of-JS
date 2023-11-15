/* Challenge 10:
Write a JavaScript function to apply the Bubble Sort algorithm.
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/
function bubbleSort(arr) {
    let s;
    do {
        s = false;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                s = true;
            }
        }
    } while(s);
    return arr;
}
var array1 = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
var sortedArr = bubbleSort(array1);
console.log(sortedArr);
