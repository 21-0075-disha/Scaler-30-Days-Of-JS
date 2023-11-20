/* Challenge 15:
Problem Description -
create a string_chop function that takes a 
and chop factor(size) and chops out the string
into the factor(size) that has been passed
Test Data :
console.log(string_chop('Scaler'));
console.log(string_chop('Scaler',2));
["Scaler"]
['Sc' , 'al' ,'er']
*/
function string_chop(str, size = 1) {
    if (size <= 0) {
        return [];
    }
    if(size === 1) return str;
    const result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size));
    }
    
    return result;
}

console.log(string_chop('Scaler'));
console.log(string_chop('Scaler', 2));
