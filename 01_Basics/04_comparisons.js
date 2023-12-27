console.log("2">1)
console.log("3" > "2")

// conversions of string to number is doone automatically in the above lines

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

/* few insights:
    -> equality works differently than comparison operators
    -> equality converts null to 0
    -> while comparisonoperators convert null to any of the number
*/
 
/*Doing this with undefined will result in false everytime */

//using ===

/* when try to compare two different datatypes using === we get the following results */
console.log(2 === '2')
//here conversion of datatypes donot occur
// the datatypes are also checked strictly


