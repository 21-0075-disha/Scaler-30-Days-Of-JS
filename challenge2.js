/* Write a JavaScript function that accepts a string as a
parameter and converts the first
letter of each word into upper case.

Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox'
*/
function modify_sentence_case(str) {
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}

let str1 = "the quick brown fox";
let str2 = modify_sentence_case(str1);
console.log(str2);
