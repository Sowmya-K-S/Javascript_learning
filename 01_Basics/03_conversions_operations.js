let score = "33"

//Here the score in string format
console.log(typeof score) //string

//To convert it to number data type

// ANYTHING -> NUMBER (Conversion)
 let score_num = Number(score)

 console.log(typeof score_num) //number

 // When we try to convert the below values to number using the above syntax, we get :

 // "33" (in generalstring that can be convertd to number) -> 33
// "33abc" (in general string that cannot be converted to number) -> NaN
// null -> 0
// undefined ->NaN (Not a Number)
// true -> 1
// false -> 0

// ANYTHING -> Boolean (Conversion)
let isloggedIn = 1

//integer to bool
let boolValue = Boolean(isloggedIn)

console.log("is log",boolValue) //true
console.log(typeof boolValue) //boolean

// string to bool

let empty_string = ""

let bool_Value = Boolean(empty_string)

console.log(bool_Value) //false
console.log(typeof bool_Value) //boolean

//Summary
//Anything -> bool
// 1 (in general, any non zero) -> true
// 0 -> false
//"" -> false
//"Shravani" (in general non-empty string) -> true

//ANYTHING -> STRING (Conversion)

let login = 1

let bool__Value = String(login)

console.log(bool__Value) //true
console.log(typeof bool__Value) //boolean


//***********OPERATIONS************

let val = - 6

//performing negation of a variable
let neg_value = -val

console.log(neg_value)
console.log(val+neg_value)

// power of
console.log(2**3)

//string concatenation
str1 = "Hello"
str2 = " All"
console.log(str1+str2) // Hello All

console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2")//32

// Not proper way to write
console.log(+true) //1
console.log(+"")  //0



