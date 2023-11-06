/* Challenge 1:
Write a JavaScript function that reverses a number.
Sample Data and output:
Example: 
x = 32243;
Expected Output: 34223
*/
function reverse_number(given_num) {
    let reversed_num = 0;
    while (given_num) {
        let digit = given_num % 10;
        reversed_num = (reversed_num * 10) + digit;
        given_num = Math.floor(given_num / 10);
    }
    return reversed_num;
}
console.log(reverse_number(32243));
