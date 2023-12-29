// by using this kind of syntaxx javascript automatically interprets this a snumber 
const score = 400 // 400

//This kind of syntax is used when we want a number type strictly

//const var_name = new Number(initial_value)
const balance = new Number(100)
console.log(balance) // [Number: 100]
// running the above statement in console will give the output somewhat similar as String

// -------------- TRY IT -----------------


// variable.toString() -> converts anything to string

console.log(balance.toString())

//after doing this all string methods can be accessed

let value = 1023.9075

// .tofixed(no_of_decimalpoints_needed)
console.log(value.toFixed(2)) //1023.91

// .toPrecision(no_of_significant_digits)
console.log(value.toPrecision(2))

// toLocaleString(Style_needed)
 let number_ = 100000000
 
 console.log("US Style",number_.toLocaleString()) // default style = US number system

 //specifying the style as a parameter will change into indian style // we will get many other values as parameters for different style
 console.log("India Style",number_.toLocaleString('en-IN'))

 // TRY other methods


//*************MATHS**********/

// Math.abs(value)
console.log(Math.abs(-123))

//Math.round(value)
console.log(Math.round(4.6))

//Math.floor(value)
console.log(Math.floor(4.6))

//Math.ceil(value)
console.log(Math.ceil(12.1))

//Try other methods as well

//Math.random() -> will generate values between 0 and 1

//to get values other than range of 0 and 1
console.log(Math.floor(Math.random() * 10) + 1)

//To get values within the range of some fixed values

let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max-min + 1) + min)







