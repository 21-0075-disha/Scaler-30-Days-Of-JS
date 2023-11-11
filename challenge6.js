function calcSumOrTripleSum(m, n) {
	if(m === n) return 6 * m;
	else return (m + n);
}
// Case 1
let a1 = 3;
let b1 = 3;
let sm1 = calcSumOrTripleSum(a1, b1);
console.log(`The integers are same, so their sum: ${sm1}`);
// Case 2
let a2 = 5;
let b2 = 9;
let sm2 = calcSumOrTripleSum(a2, b2);
console.log(`The integers are different, so their sum: ${sm2}`);
