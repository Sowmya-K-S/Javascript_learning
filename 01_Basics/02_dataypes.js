"use strict" //This written to say the environment to treat all the code as newer version

//alert("Hello") //We are using nodejs, not browser

//Code readbility should be high

//Data types

//number 
let age = 20

//string
let name = "Shravani"

//boolean
let isLoggedIn = false

/* null -> standalone value
        -> used for empty values
*/

//undefined -> value not assigned yet

//symbol -> used in react

//object

//typeof(variable name / variable value)
//tells the type of parameter passed

console.log(typeof(isLoggedIn)) //boolean
console.log(typeof(1.23)) // number

//type of can be used without parethesis also
console.log(typeof undefined) //undefined
console.log(typeof null) //object


//DATATYPES SUMMARY

/* Types of datatypes
-> primitive (call by value) - 7 types
   - String
   - Number
   - Boolean 
   - null
   - undefined
   - Symbol
   - BigInt

-> non primitive (Reference)
   - Array
   - Objects
   - functions


NOTE: Javascript is dynamically typed language
*/

//Usage of Symbol datatype

const id = Symbol('123')
console.log('type of id is',typeof id) //symbol

const id2 = Symbol('123')

console.log(id == id2) // false

// This indicates the purpose of symbol
// even if we pass same value in the Symbol(), its responsibility is to make theem unique

let arr = [1, 2, 3]
console.log(typeof arr) //object  